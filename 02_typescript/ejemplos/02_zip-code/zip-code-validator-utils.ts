const LENGTH = 5;

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator {

    private isValid(s: string) {
        return s.length === LENGTH && numberRegexp.test(s);
    }

    isAcceptable1(s: string) {
        return this.isValid(s);
    }

    public isAcceptable2(s: string) {
        return this.isValid(s);
    }
}

