export class Product {
    url;title; price; desc; location; owner_name;owner_email; created_at; updated_at;;id
    constructor(form,id)
    {
        this.url = form.value.url,
        this.title = form.value.title;
        this.price = form.value.price;
        this.desc = form.value.desc;
        this.location = form.value.location,
        this.created_at = new Date();
        this.id = id;
    }
}
