<template>
  <section id="about">
    <div class="container">
      <h1 class="aboutmetitle">A little about me...</h1>
      <div id="aboutinfo">
        <div class="itsame">
          <img src="../assets/placeholder.jpg" alt="Itsa me!" />
        </div>
        <article id="summary">
          I am an up and coming junior full Stack developer currently living in
          Las Vegas, NV. After working within the insurance claims world for the
          last 6 years, I've decided to switch up my career plans into
          programming. I have been self-studying using "The Odin Project" over
          the last year along with freecodecamp and a few Udemy courses along
          the way. Constantly applying myself daily while learning new
          technologies and concepts has been a great experience, I think my hard
          work and detemination speak for itself with how far I have come and
          how far I can still go.
        </article>
      </div>
      <div class="skillsinfo">
        <h1 class="title">Skills and Technologies</h1>
        <div id="skills-box" class="tile is-ancestor">
          <!-- Left Section -->
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <div id="fontend" class="tech-box tile is-child">
                  <div class="techTitle">
                    Front-End
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/frontend/vuejs-seeklogo.com.svg"
                      alt="Vue"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/frontend/htmllogo.png"
                      alt="HTML"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/frontend/pug.png"
                      alt="Pug"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/frontend/csslogo.png"
                      alt="CSS"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/frontend/bootstraplogo.png"
                      alt="BootStrap"
                    />
                  </div>
                  <div class="iconText bulmafix">
                    <img
                      src="../assets/tech icons/frontend/bulma-seeklogo.com.svg"
                      alt="Bulma"
                    />
                  </div>
                </div>
                <!--  -->
                <div id="devops" class="tech-box tile is-child">
                  <div class="techTitle">
                    DevOps
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/devops/gitlogo.png"
                      alt="Git"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/devops/githublogo.png"
                      alt="GitHub"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/devops/heroku.png"
                      alt="Heroku"
                    />
                  </div>
                  <div class="iconText">
                    <img src="../assets/tech icons/devops/npm.png" alt="npm" />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/devops/webpack.png"
                      alt="webpack"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Right Section -->
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <div id="backend" class="tech-box tile is-child">
                  <div class="techTitle">
                    Back-End
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/backend/nodelogo.png"
                      alt="NodeJs"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/backend/express.png"
                      alt="Express"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/backend/mysql.svg"
                      alt="SQL"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/backend/mongoose.png"
                      alt="Mongoose"
                    />
                  </div>
                  <div class="iconText mongodbfix">
                    <img
                      src="../assets/tech icons/backend/mongoDB.png"
                      alt="MongoDB"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/backend/firebase.png"
                      alt="Firebase"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/backend/oauth.png"
                      alt="OAuth"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/backend/passportjs.png"
                      alt="Passport"
                    />
                  </div>
                </div>
                <!--  -->
                <div id="tools" class="tech-box tile is-child">
                  <div class="techTitle">
                    Tools
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/languages/jslogo.png"
                      alt="Javascript"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/tools/vscode.png"
                      alt="VS Code"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/tools/postman.png"
                      alt="Postman"
                    />
                  </div>
                  <div class="iconText">
                    <img
                      src="../assets/tech icons/tools/jest-seeklogo.com.svg"
                      alt="Jest"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>
<style scoped>
#about {
  margin-bottom: 50px;
}

.aboutmetitle {
  color: inherit;
  font-size: 3.5rem;
}

.title {
  color: inherit;
}

#aboutinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}

.itsame > img {
  border-radius: 5px;
  height: 400px;
  min-width: 384px;
}

#summary {
  width: 500px;
  padding: 20px;
  text-align: left;
  font-size: 1.4rem;
  line-height: normal;
}

.is-parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.iconText {
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
}

.bulmafix > img {
  height: 75px;
}

.mongodbfix > img {
  height: 75px;
  width: 75px;
}

.skillsinfo {
  display: flex;
  flex-direction: column;
}

.tech-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid white;
  max-width: 450px;
}

.tile.is-child {
  margin: 15px !important;
}

.techTitle {
  border-bottom: 1px solid white;
  background-color: rgb(45, 48, 50);
  color: white;
  width: 100%;
  height: 30px;
  padding: 5px;
  font-size: 16px;
}

@media screen and (max-width: 1024px) {
  #aboutinfo {
    flex-direction: column;
  }

  .itsame > img {
    height: 300px;
    min-width: 284px;
  }
}
/*Mobile Mix-ins*/
@media screen and (max-width: 600px) {
  #aboutinfo {
    flex-direction: column;
  }

  .aboutmetitle {
    font-size: 2.5rem;
    padding-top: 50px;
  }

  #summary {
    font-size: 1rem;
    width: auto;
  }
}
</style>
