<template>
  <div class="Home">
    <section class="Section --brand --pullBottom">
      <div>
        <div>
          <h1>
            Level up with the TypeRacer API
          </h1>
          <p>
            Do you love TypeRacer? Do you want to build something cool with it? The TypeRacer API is here to help.
          </p>
          <footer>
            <a
              class="Button --medium"
              href="/getting_started.html"
            >
                Get Started
            </a>
          </footer>
        </div>
        <aside>
          <figure>
            <img src="/TypeeCar.svg" alt="Hero Image" style="margin-bottom:2em;" />
          </figure>
        </aside>
      </div>
    </section>

    <section class="Section --singleColumn --centerText">
      <div>
        <div>
          <h1>
            Got Questions?
          </h1>
          <p>
            Feel free to reach out to our support team, and we'll be more than happy to assist you.
          </p>
          <footer>
            <a
              class="Button --medium --brand"
              href="mailto:support@typeracer.com"
              target="_blank"
            >
              Contact Us
            </a>
          </footer>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .--hideMobile {
    display: none !important;
  }
}

/* Button */

.Button {
  display: inline-block;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color .25s, background-color .25s;
  color: var(--vp-button-brand-text);
  background-color: var(--vp-c-brand-black);
  border-radius: 6px;
  padding: 0 14px;
  line-height: 34px;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
}

.Button:hover {
  background-color: var(--vp-c-brand-black-lighter);
}

.Button.--brand {
  border-color: var(--vp-button-brand-border);
  background-color: var(--vp-button-brand-bg);
}

.Button.--brand:hover {
  background-color: var(--vp-c-brand-light);
}

.Button.--medium {
  border-radius: 8px;
  padding: 0 24px;
  line-height: 42px;
  font-size: 16px;
}

/* Grid */

.Grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.Grid.--2x > * {
  flex: 1;
}

/* GamePod */

.GamePod {
  display: flex;
  background-color: var(--vp-c-brand-dimm);
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--vp-c-brand-dimm) inset;
  max-width: calc(165px + 16px);
}

a.GamePod:hover {
  box-shadow: 0 0 0 1px var(--vp-c-brand-light) inset;
}

.GamePod > * {
  margin: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.GamePod > figure img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.GamePod > div > * {
  display: block;
  margin: 4px 0;
}

.GamePod > div img {
  height: 1em;
  width: auto;
}

.GamePod > div small {
  line-height: 1;
  font-weight: bold;
}

/* LogoPod */

.LogoPod {
  display: flex;
  background-color: var(--vp-c-brand-dimm);
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 180px;
  min-width: 220px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--vp-c-brand-dimm) inset;
}

a.LogoPod:hover {
  box-shadow: 0 0 0 1px var(--vp-c-brand-light) inset;
}

.LogoPod > * {
  margin: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
}

.LogoPod > div .Button {
  margin-top: 8px;
}

.LogoPod > figure img {
  height: 60px;
  width: auto;
  border-radius: 4px;
}

.dark .LogoPod > figure img.--light {
  display: none;
}

.LogoPod > figure img.--dark {
  display: none;
}

.dark .LogoPod > figure img.--dark {
  display: inline-block;
}


/* Section */

.Section {
  padding: 32px 0;
}

.Section > div {
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Section > div > div,
.Section > div > aside {
  flex: 1;
  margin: 0 24px;
}

.Section > div > div {
  margin-bottom: 32px;
}

.Section > div > div > * {
  margin: 16px 0;
}

.Section > div > div > ul li {
  margin: 16px 0;
}

.Section > div > div > ul.--hasIcons li {
  padding-left: 48px;
  position: relative;
}

.Section > div > div > ul.--hasIcons li img {
  position: absolute;
  top: 4px;
  left: 0;
  width: 32px;
  height: auto;
  opacity: 0.85;
  filter: invert(1);
}

.dark .Section > div > div > ul.--hasIcons li img {
  filter: invert(0);
}

.Section > div > div > dl {
  text-align: left;
}

.Section > div > div > dl dt {
  font-weight: bold;
  margin-top: 16px;
}

.Section > div > div > dl dd {
  margin-inline-start: 0;
  margin: 8px 0 16px 0;
}

.Section > div > div > dl dd:not(:last-child) {
  border-bottom: solid 1px;
  padding-bottom: 16px;
}

.Section > div > div > h1,
.Section > div > div > h2 {
  font-size: 28px;
  line-height: 1.2;
  font-weight: bold;
}

.Section > div > div h4 {
  font-weight: bold;
}

/* Branded */

.Section.--brand {
  background-color: var(--vp-c-brand);
  background-image: url('/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: var(--vp-button-brand-text);
}

/* Single Column */

.Section.--singleColumn > div {
  max-width: 900px;
}

/* Center Text */

.Section.--centerText > div {
  text-align: center;
}

/* Pull Bottom */

.Section.--pullBottom {
  padding-bottom: 0;
}

.Section.--pullBottom > div {
  align-items: flex-end;
}

/* Small devices */

@media (min-width: 768px) {
  /* Grid */

  .Grid {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .Grid.--2x > * {
    flex: 0 0 calc(50% - 16px);
  }

  .Grid.--3x > * {
    flex: 0 0 calc(33% - 16px);
  }

  /* Section */

  .Section {
    padding: 64px 0;
  }

  .Section > div {
    flex-direction: row;
  }
  .Section > div > div,
  .Section > div > aside {
    margin: 0 32px;
    flex: 1;
    width: auto;
  }

  .Section > div > div {
    margin-bottom: 0;
  }

  .Section > div > div > * {
    margin: 24px 0;
  }

  .Section > div > div > ul li {
    margin: 24px 0;
  }

  .Section > div > div > dl dt {
    margin-top: 24px;
  }

  .Section > div > div > dl dd {
    margin: 16px 0 24px 0;
  }

  .Section > div > div > dl dd:not(:last-child) {
    padding-bottom: 24px;
  }

  .Section > div > div > h1,
  .Section > div > div > h2 {
    font-size: 36px;
  }

  /* Content Right */

  .Section.--contentRight > div {
    flex-direction: row-reverse;
  }

  /* Pull Bottom */

  .Section.--pullBottom > div > div {
    padding-bottom: 64px;
  }
}
</style>