import { readFileSync } from "fs";
import * as path from "path";
import { ensureFile } from "fs-extra";
const yaml = require("js-yaml");
const fileName = "mps.yml";

export class YamlReader {
  constructor() {
    this.yamlToJsonDoc();
  }

  private async yamlToJsonDoc() {
    try {
      const configFile = path.join(__dirname, fileName);
      await ensureFile(configFile);

      const fileContents = readFileSync(configFile, {
        encoding: "utf-8",
      });

      global.pageEleDoc = yaml.load(fileContents);
    } catch (err) {
      console.error(err);
    }
  }

  public getElementValue(pageName, elementName): any {
    console.log(`Search Page Name: ${pageName}, Element Name: ${elementName}`);
    if (global.pageEleDoc) {
      let pageEles: any = global.pageEleDoc[pageName]["elements"];
      if (pageEles) {
        const element = pageEles.find((x) => x.elementName == elementName);
        return element["value"];
      }
    }
    return null;
  }
}
module.exports = { YamlReader };
