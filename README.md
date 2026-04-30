## 🛠️ How to Run This Project After Cloning

Anyone who clones this repository can run the tests by following these steps:

### 1. Install dependencies
After cloning the repo, install all required Node packages:

npm install


### 2. Install Playwright browsers
Playwright requires browser binaries (Chromium, Firefox, WebKit):

npx playwright install


### 3. Run the tests (Chromium only)
The tests are designed to run in Chromium due to WebRTC and popup requirements:

npx playwright test --project=chromium --headed --workers=1


### 4. Manual login is required
Both tests have `page.pause()` so the user must:

- Enter email  
- Enter password  
- Complete MFA  
- Click **Resume** in the Playwright Inspector  

After login, the test continues automatically.

### 5. Run individual test files
Messages Test:

npx playwright test tests/messages.spec.js --project=chromium --headed --workers=1


Video Meeting Test:

npx playwright test tests/videoMeeting.spec.js --project=chromium --headed --workers=1

