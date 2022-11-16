import { ZipCodeValidator, numberRegexp } from "./zip-code-validator-utils";

const validator = new ZipCodeValidator();

validator.isAcceptable1("string");
