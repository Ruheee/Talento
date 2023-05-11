## How to run server and instantiate database:

1. Install dependencies

   ```
   npm install
   ```

2. Run server

   ```
   npm start
   ```

3. Instantiate database

   ```
   Go to: localhost:8005/api/debug/reset
   ```

   This will instantiate the database with the default data.


## Generating self-signed SSL certificate and key on local machine

1. Install mkcert (only once) 

   ```
   brew install mkcert
   ```
   <br />


2. Add mkcert to your local root CAs.

   - In your terminal, run the following command:

     ```
     mkcert -install
     ```

    This generates a local certificate authority (CA). Your mkcert-generated local CA is only trusted locally, on your device. 

    <br />


3. Generate a certificate for your site, signed by mkcert.

   - In your terminal, navigate to your site's root directory or whichever directory you'd like the certificates to be located at.

   - Then, run:

     ```
     mkcert localhost
     ```

    The command above does two things:

   - Generates a certificate for the hostname you've specified
   - Lets mkcert (that you've added as a local CA in Step 2) sign this certificate.
   - Now, your certificate is ready and signed by a certificate authority your browser trusts locally. Your server can now run on https:// !
