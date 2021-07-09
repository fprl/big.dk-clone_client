<!-- REPO TITLE -->
<br />
<p align="center">
  <img src="readme/logo.svg" alt="Logo" height="80">

  <h4 align="center">Bjarke Ingels Group | Clone</h4>
  <p align="center">
    <a href="https://big-dk.vercel.app/">Live Demo</a>
    ·
    <a href="https://big.dk/">Original</a>
  </p>
</p>

<br />
<br />


![product-screenshot]
<!-- ABOUT THE PROJECT -->
## About the clone
The aim of this clone is to improve the [BIG (Bjarke Ingels Group)](https://big.dk/) website which is made with wordpress, a custom plugin and the Canvas API and which lacks of responsiveness, accesibility performance and SEO based on the lighthouse report.

This clone also help me to get a workaround to the `flex-direction: column;` css problem.

### Improvements
 <div align="center">
  <img src="readme/SEO.jpg" height="120" alt="Clone lighthouse report">
 </div>

 * Improved lighthouse report
 * Semantic elements.
 * SEO improved.
 * Responsive design that works with mobile, tablet and desktop.
 * Search bar for projects.
 * Each project has it's own page (SEO improvement) with it's own slug based on the project name provided in the headless CMS.
 * Color contrasts corrected.


### Made with
* [Next.js](https://nextjs.org/)
* [styled-components](https://styled-components.com/)
* [Axios](https://axios-http.com/)
* [react-easy-flip](https://github.com/jlkiri/react-easy-flip)
* [react-spring](https://react-spring.io/)

* [Strapi](https://strapi.io/) as a Headless CMS => [repository](https://github.com/francoromanol/big.dk-clone_server)


### Installation and start
To get a local copy up and running follow these steps:

1. Clone this repo and headless cms repo
   ```sh
   $ git clone https://github.com/francoromanol/big.dk-clone_client.git 
   $ git clone https://github.com/francoromanol/big.dk-clone_server.git
   ```
2. Install packages on client and headless cms
   ```sh
   $ yarn install
   ```
3. In `.env.local` file (client)
    ```sh
    CMS_HOST= [CMS HOST]
    CMS_LOCALHOST= 'http://localhost:1337'
    NEXT_PUBLIC_CMS_LOCALHOST=$CMS_LOCALHOST
    ```
4. In `.env` (headless cms)
    ```sh
    HOST=0.0.0.0
    PORT=1337
    CLOUDINARY_NAME = [CLOUDINARY NAME]
    CLOUDINARY_KEY = [CLOUDINARY KEY]
    CLOUDINARY_SECRET = [CLOUDINARY SECRET]
    ```
5. Run client and headless cms
    ```sh
    $ yarn dev # client
    $ yarn develop # headless cms
    ```

Once started the client app should be available via [localhost:3000](http://localhost:3000) and the headless cms via [localhost:1337](http://localhost:1337)


### Have a great day!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: readme/recording.gif
