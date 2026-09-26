/**
 * Nexio contact-form → Google Sheet webhook.
 *
 * Setup:
 *  1. Create a new Google Sheet (in the chanchadharsh4@gmail.com account).
 *  2. Extensions → Apps Script. Delete the sample code, paste ALL of this file.
 *  3. (Optional but recommended) set a shared secret: replace the empty string
 *     in SECRET below with any random string, and put the SAME value in
 *     .env.local as SHEET_WEBHOOK_TOKEN. Leave both empty to skip the check.
 *  4. Deploy → New deployment → type "Web app".
 *       - Execute as: Me
 *       - Who has access: Anyone
 *     Click Deploy, authorize when prompted, and copy the Web app URL.
 *  5. Put that URL in .env.local as SHEET_WEBHOOK_URL, then restart `next dev`.
 *
 * Each submission is appended as one row to a "Leads" tab (created on first run,
 * with a header row). Newest submissions land at the bottom.
 */

var SECRET = '' // must match SHEET_WEBHOOK_TOKEN in .env.local (empty = no check)

function doPost(e) {
  var lock = LockService.getScriptLock()
  lock.waitLock(30000) // serialize concurrent submissions so rows never collide
  try {
    var data = JSON.parse(e.postData.contents)

    if (SECRET && data.token !== SECRET) {
      return json({ ok: false, error: 'unauthorized' })
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads')
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Project type', 'Timeline', 'Budget', 'Problem'])
    }
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.type || '',
      data.timeline || '',
      data.budget || '',
      data.problem || '',
    ])
    return json({ ok: true })
  } catch (err) {
    return json({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
