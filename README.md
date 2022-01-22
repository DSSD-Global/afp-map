# AFP Map
An interactive map built in Leaflet to display Alliance for Peacebuildings various members across the world.

## Requirements
You need to acquire `KEY_ID.txt`, a file added to the `.gitignore` containing the API key and Client ID on two lines. Add this file containing the two secrets to the project root. 

## Firebase testing & deployment
1. Install `firebase` Command Line Tools.    
2. Follow the steps listed here to deploy: [https://firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting).        
3. Make sure to run `firebase emulators:start` with the local key and local client (put these in `KEY_ID.txt`) to make sure everything is working before deploying.     
4. Then, put the Deploy API key and Client ID into `KEY_ID.txt`.
5. Run `firebase deploy`
6. Finally, navigate to [https://afpmap.web.app/](https://afpmap.web.app/).    

## Making Changes
Please make your changes on a separate branch and submit an MR for review.  Name the branch according to the issue.

DO NOT push to main.
