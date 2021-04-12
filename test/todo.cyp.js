describe("Todo application - List page",()=>{
    /*beforeEach(()=>{
        cy.visit("/");
        for(var i=1;i<4;i++){
        cy.get("input.new-todo").type(i+" notes");
        cy.get("input.new-todo").type("{enter}");
       }       
       cy.get("input.edit").should("have.length",3);
    })*/
    it("adding notes to todo list",()=>{
        cy.visit("/");
       for(var i=1;i<4;i++){
        cy.get("input.new-todo").type(i+" notes");
        cy.get("input.new-todo").type("{enter}");
       }       
       cy.get("input.edit").should("have.length",3);
    })

    xit("update any todo content",()=>{
        cy.get("input.edit").eq(1).as("todo");
        cy.get("@todo").click({force:true});
        cy.get("@todo").clear();
        cy.get("@todo").type("MMM");
        cy.get("input.new-todo").type("{enter}");
    })

    it("delete any one todo",()=>{
        cy.get("button.destroy").should("have.length",3);
        cy.get("button.destroy").eq(1).as("rmtodo");
        cy.get("@rmtodo").click({force:true})
        /*or
        cy.get("@rmtodo").trigger("mouseover");
        cy.get("@rmtodo").click();
        */
        cy.get("@rmtodo").should("have.length",2);
    })

    it("marking one todo done",()=>{
        cy.get("input.toggle").eq(0).as("dntodo");
        cy.get("@dntodo").click({force:true})
        cy.get("@dntodo").parents("li").should("have.class","completed");
    })
    
})