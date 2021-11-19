class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput ("Enter the answer")


    this.button = createButton('Submit');

    //Create elements for One question (h3) and 4 options (h4)
    this.message = createElement("h2");
    this.hello = createElement("h3");
    this.hello1 = createElement("h4");
    this.hello2 = createElement("h4");
    this.hello3 = createElement("h4");
    this.hello4 = createElement("h4");
    
    
  }

  hide(){
     this.title.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(250, 0);

    



    //Create html() and position() for each question, input and answers.
    this.hello.html("Question: Who was India's first president?")
    this.hello.position(100,50)

    this.hello1.html("1: APJ Abdul Kalam");
    this.hello1.position(100,90);

    this.hello2.html("2: Pranab Mukharjee");
    this.hello2.position(100,120);

    this.hello3.html("3: Rajendra Prasad");
    this.hello3.position(100,150);

    this.hello4.html("4: Ram Nath Kovid");
    this.hello4.position(100,180);

    this.input1.position(120, 260);
    this.button.position(250, 300);
    this.input2.position(320, 260)

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("[Thank You Your Answer Has Been Submitted]");
      this.message.position(250,320);
      
    })


  }
}
