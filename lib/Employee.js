class Employee {
    constructor (name, id, email) {
        this.Name = name;
        this.Id = id;
        this.Email = email;
    }

    getName(){
        return this.Name
    }
    
    getId(){
        return this.Id

    }

    getEmail(){
        return this.Email



    }

    getRole(){
        return "Employee"

        



    }
    
}

module.exports = {Employee}






