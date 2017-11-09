export class Temp {
    url;title; price; desc; location; owner_name;owner_email; created_at; updated_at;;id
    constructor(form,id)
    {
        this.url = form.url,
        this.title = form.title;
        this.price = form.price;
        this.desc = form.desc;
        this.location = form.location,
        this.created_at = new Date();
        this.id = id;
    }
}
