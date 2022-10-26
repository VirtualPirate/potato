import { skills } from "../models/skill.model.js";

class ProjectElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Connected callback is called");
    if (this.hasAttribute("name") && this.hasAttribute("createdusing")) {
      const name = this.getAttribute("name");
      //   const codeLink = this.getAttribute("codelink");

      let codeLink = undefined;
      if (this.hasAttribute("codeLink")) {
        codeLink = this.getAttribute("codeLink");
      }
      let deployLink = undefined;
      if (this.hasAttribute("deploylink")) {
        deployLink = this.getAttribute("deploylink");
      }
      //   ${deployLink ? `<a href="${deployLink}>` : "<a>"}
      this.innerHTML = `
                <div class="project">
                    <div class="project-info">
                        <div class="project-name">${name}</div>
                        <div class="project-links">
                                ${
                                  codeLink
                                    ? `
                                <span class="project-code-link-title">Code Link: </span>
                                <a class="project-code-link" href="${codeLink}">${codeLink}</a>`
                                    : ""
                                }

                                ${
                                  deployLink
                                    ? `
                                <span class="project-deploy-link-title">Deploy Link: </span>
                                <a class="project-deploy-link" href="${deployLink}">${deployLink}</a>`
                                    : ""
                                }
                        </div>

                        <div class="created-using">
                            <span>CREATED USING: </span>
                        </div>
                    </div>
                </div>
                `;

      this.inflateCreatedUsing(this.getAttribute("createdusing"));

      this.querySelector(".project").addEventListener("click", () => {
        if (deployLink) window.location.href = deployLink;
      });
    }
  }

  inflateCreatedUsing(createdUsingAttr) {
    const createdUsingArray = createdUsingAttr.split(" ");

    const createdUsingElements = Array(createdUsingArray.length);
    createdUsingArray.forEach((each) => {
      const element = document.createElement("img");
      element.src = `./graphics/skillset/${skills[each].logo}`;
      element.className = "created-using-logo";
      element.alt = "";
      createdUsingElements.push(element);
    });

    const createdUsing = this.querySelector(".created-using");
    createdUsing.innerHTML = "<span>CREATED USING: </span>";
    createdUsingElements.forEach((element) =>
      createdUsing.appendChild(element)
    );
  }

  static get observedAttributes() {
    return ["name", "codelink", "createdusing", "deploylink"];
  }

  attributeChangeCallback(attrName, oldValue, newValue) {
    if (attrName == "name")
      this.querySelector(".project-name").innerHTML = newValue;
    else if (attrName == "codelink") {
      const codeLink = this.querySelector(".project-code-link");
      codeLink.innerHTML = newValue;
    } else if (attrName == "deploylink") {
      const codeLink = this.querySelector(".project-deploy-link");
      codeLink.innerHTML = newValue;
    } else if (attrName == "createdusing") {
      this.inflateCreatedUsing(newValue);
    }
  }
}

customElements.define("project-element", ProjectElement);
