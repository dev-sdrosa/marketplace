export class NewItemForm {
    constructor(
        public name: string,
        public description: string,
        public image: string,
        public category: string,
        public price?: number,
    ) {}
}
