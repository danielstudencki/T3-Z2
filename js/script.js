(function(){
    
    if(!window.localStorage) return;

    function LocalDB(name){
        
        this.name = name;
        
    }

    LocalDB.prototype.save = function(key, value) {
        
            window.localStorage.setItem(this.name+"."+key, JSON.stringify(value));
    }
    
    LocalDB.prototype.get = function(key) {
        
        var value = JSON.parse(window.localStorage.getItem(this.name+"."+key)); 
        console.log(value);
        
    }
    
    var databases = {
        
        createDatabase: function(name) {
            this[name] = new LocalDB(name);
            console.dir(this);
        }
        
    }
    
    var andrzej = {
        firstName: "Andrzej",
        lastName: "Nowak",
        email: "andrew@gmail.com",
        age: 26
    };

    databases.createDatabase("DB1");    
    databases.DB1.save("andrzej", andrzej);
    databases.DB1.get("andrzej");
    
})();