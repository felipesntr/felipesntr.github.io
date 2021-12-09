class Card {
    constructor(header, body, footer) {
        this.header = header;
        this.body = body;
        this.footer = footer;
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');
        const header = document.createElement('div');
        header.classList.add('card--header');
        const body = document.createElement('div');
        body.classList.add('card--body');
        const footer = document.createElement('div');
        footer.classList.add('card--body');

        header.appendChild(this.header);
        body.appendChild(this.body);
        footer.appendChild(this.footer);

        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(footer);

        return card;
    }
}