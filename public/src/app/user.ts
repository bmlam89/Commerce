export class User {
    first; last; email; password; created_at; updated_at;
    constructor(first,last,email,password)
    {
        this.first = first;
        this.last = last;
        this.email = email;
        this.password = password;
        this.created_at = new Date();
    }
}
