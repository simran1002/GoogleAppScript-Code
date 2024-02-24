function createCombinedPresentation() {
    const presentation = SlidesApp.create("Combined Presentation");

    createFirstSlide(presentation, 0);
    createSecondSlide(presentation, 1);
    createThirdSlide(presentation, 2);
    createFourSlide(presentation, 3);
    createFiveSlide(presentation, 4);
    createSixSlide(presentation, 5);
    createSevenSlide(presentation, 6);
    createEightSlide(presentation, 7);
    createNineSlide(presentation, 8);
    createTenSlide(presentation, 9);
    createElevenSlide(presentation, 10);
    createTwelveSlide(presentation, 11);
   
}





function createFirstSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);

    const title = slide.insertTextBox('Indian History')
    const titleStyle= title.getText().getTextStyle()
    titleStyle.setFontFamily('Lato')
    titleStyle.setBold(true)
    titleStyle.setFontSize(24)
    titleStyle.setForegroundColor('#000000')
    title.setTop(40)
    title.setLeft(30)
    title.setWidth(300)

    const subtitle = slide.insertTextBox('Club History')
    const subStyle = subtitle.getText().getTextStyle()
    subStyle.setForegroundColor('#000000')
    subStyle.setBold(true)
    subStyle.setFontSize(12)
    subStyle.setFontFamily('Lato')
    subtitle.setTop(80)
    subtitle.setLeft(30)
    subtitle.setWidth(100)

    const listItems = [
        {text: "The Indian Army continues to modernize its equipment and technology.", textColor: "#000000"},
        {text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000"},
    ];

    const x = 190;
    const y = 80;
    const textBoxWidth = 460;
    const textBoxHeight = 30;
    const lineHeight = 15;

    listItems.forEach(function(item, index) {
        const textBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x, y + index * lineHeight, textBoxWidth, textBoxHeight);
        textBox.getText().setText(item.text).getTextStyle().setFontSize(8);
        textBox.getText().getTextStyle().setForegroundColor(item.textColor);
        textBox.getBorder().setTransparent();
        textBox.getFill().setSolidFill('#ffffff');
    });

    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(4)
    shape2.setHeight(4)
    shape2.setTop(90)
    shape2.setLeft(170)
    shape2.getBorder().getLineFill().setSolidFill('#000000')
    shape2.getFill().setSolidFill('#000000')

    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(4)
    shape3.setHeight(4)
    shape3.setTop(107)
    shape3.setLeft(170)
    shape3.getBorder().getLineFill().setSolidFill('#000000')
    shape3.getFill().setSolidFill('#000000')

    const image1 = slide.insertImage('https://static.theprint.in/wp-content/uploads/2023/07/Army-1-1024x576.jpg?compress=true')
    image1.setHeight(200)
    image1.setWidth(650)
    image1.setTop(180)
    image1.setLeft(35)
}





function createSecondSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);

    const shape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape.setWidth(250)
    shape.setTop(5)
    shape.setLeft(5)
    shape.setHeight(395)
    shape.getBorder().getLineFill().setSolidFill('#f5dd23')
    shape.getFill().setSolidFill('#f5dd23')

    const image = slide.insertImage('https://static.theprint.in/wp-content/uploads/2023/07/Army-1-1024x576.jpg?compress=true');
    image.setHeight(200);
    image.setWidth(200);
    image.setTop(110);
    image.setLeft(30);

    const title = slide.insertTextBox('India History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setBold(true)
    titleStyle.setForegroundColor('#000000')
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    title.setTop(40)
    title.setLeft(300)
    title.setWidth(650)

    const subtitle = slide.insertTextBox('Indian Army')
    const subStyle = subtitle.getText().getTextStyle()
    subtitle.setTop(90)
    subtitle.setLeft(300)
    subtitle.setWidth(350)
    subStyle.setForegroundColor('#000000')
    subStyle.setFontSize(14)
    subStyle.setFontFamily('Lato')
    subStyle.setBold(true)

    const listItems = [
        {text: "The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities", textColor: "#000000"},
        {text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000"},
        {text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000"},
        {text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000"}
    ];

    var x = 350;
    var y = 130;
    var textBoxWidth = 300;
    var textBoxHeight = 50;
    var lineHeight = 50;

    listItems.forEach(function(item, index) {
        var textBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x, y + index * lineHeight, textBoxWidth, textBoxHeight);
        textBox.getText().setText(item.text).getTextStyle().setFontSize(11);
        textBox.getText().getTextStyle().setForegroundColor(item.textColor);
        textBox.getBorder().setTransparent();
        textBox.getFill().setSolidFill('#ffffff');
    });

    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(4)
    shape1.setHeight(4)
    shape1.setTop(143)
    shape1.setLeft(330)
    shape1.getBorder().getLineFill().setSolidFill('#2E8BC0')
    shape1.getFill().setSolidFill('#2E8BC0')

    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(4)
    shape2.setHeight(4)
    shape2.setTop(193)
    shape2.setLeft(330)
    shape2.getBorder().getLineFill().setSolidFill('#2E8BC0')
    shape2.getFill().setSolidFill('#2E8BC0')

    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(4)
    shape3.setHeight(4)
    shape3.setTop(243)
    shape3.setLeft(330)
    shape3.getBorder().getLineFill().setSolidFill('#2E8BC0')
    shape3.getFill().setSolidFill('#2E8BC0')

    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(4)
    shape6.setHeight(4)
    shape6.setTop(293)
    shape6.setLeft(330)
    shape6.getBorder().getLineFill().setSolidFill('#2E8BC0')
    shape6.getFill().setSolidFill('#2E8BC0')
}





function createThirdSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    const image = slide.insertImage('https://static.theprint.in/wp-content/uploads/2023/07/Army-1-1024x576.jpg?compress=true')
    image.setHeight(395)
    image.setWidth(708)
    image.setLeft(5)
    image.setTop(5)
  
    const shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape1.setWidth(470)
    shape1.setHeight(335)
    shape1.setTop(35)
    shape1.setLeft(40)
    shape1.getBorder().getLineFill().setSolidFill('#FFFFFF')
    shape1.getFill().setSolidFill('#FFFFFF')
  
    const title = slide.insertTextBox('India History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setBold(true)
    titleStyle.setForegroundColor('#000000')
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    title.setTop(50)
    title.setLeft(60)
    title.setWidth(440)
  
    const subtitle = slide.insertTextBox('Club History')
    const subStyle = subtitle.getText().getTextStyle()
    subStyle.setForegroundColor('#000000')
    subStyle.setBold(true)
    subStyle.setFontSize(14)
    subStyle.setFontFamily('Lato')
    subtitle.setTop(100)
    subtitle.setLeft(60)
    subtitle.setWidth(440)
  
    const listItems = [
      {text: "The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities", textColor: "#000000"}, // Black text
      {text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000"}, // Black text
      {text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000"} ,
   
    ];
  
    const x = 110;
    const y = 160;
    const textBoxWidth = 360;
    const textBoxHeight = 50;
    const lineHeight = 40;
  
    // Add items to the slide as text boxes
    listItems.forEach(function(item, index) {
      const textBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x, y + index * lineHeight, textBoxWidth, textBoxHeight);
      textBox.getText().setText(item.text).getTextStyle().setFontSize(11); // Set text and font size
      textBox.getText().getTextStyle().setForegroundColor(item.textColor); // Set color for the text
      textBox.getBorder().setTransparent(); // Make border transparent
      textBox.getFill().setSolidFill('#ffffff'); // Make background color of the text box same as slide background color
    });
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(4)
    shape2.setHeight(4)
    shape2.setTop(173)
    shape2.setLeft(90)
    shape2.getBorder().getLineFill().setSolidFill('#000000')
    shape2.getFill().setSolidFill('#000000')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(4)
    shape3.setHeight(4)
    shape3.setTop(213)
    shape3.setLeft(90)
    shape3.getBorder().getLineFill().setSolidFill('#000000')
    shape3.getFill().setSolidFill('#000000')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(4)
    shape6.setHeight(4)
    shape6.setTop(253)
    shape6.setLeft(90)
    shape6.getBorder().getLineFill().setSolidFill('#000000')
    shape6.getFill().setSolidFill('#000000')
  
  }
  




function createFourSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    const title = slide.insertTextBox('Indian History')
    const titleStyle= title.getText().getTextStyle()
    titleStyle.setFontFamily('Lato')
    titleStyle.setBold(true)
    titleStyle.setFontSize(24)
    titleStyle.setForegroundColor('#000000')
    title.setTop(30)
    title.setLeft(45)
    title.setWidth(300)
  
    const image1 = slide.insertImage('https://static.theprint.in/wp-content/uploads/2023/07/Army-1-1024x576.jpg?compress=true')
    image1.setHeight(180)
    image1.setWidth(190)
    image1.setTop(70)
    image1.setLeft(45)
  
    const sub1 = slide.insertTextBox('Ancient Civilization')
    const sub1Style = sub1.getText().getTextStyle()
    sub1Style.setBold(true)
    sub1Style.setFontSize(14)
    sub1Style.setFontFamily('Lato')
    sub1Style.setForegroundColor('#000000')
    sub1.setTop(250)
    sub1.setLeft(50)
    sub1.setWidth(190)
  
    const info1 = slide.insertTextBox('Explore the rich history of the indus valley and vaidic civilization')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1.setTop(280)
    info1.setLeft(50)
    info1.setWidth(190)
  
    const image2 = slide.insertImage('https://static.theprint.in/wp-content/uploads/2023/07/Army-1-1024x576.jpg?compress=true')
    image2.setHeight(200)
    image2.setWidth(180)
    image2.setTop(70)
    image2.setLeft(260)
  
    const sub2 = slide.insertTextBox('Ancient Civilization')
    const sub2Style = sub2.getText().getTextStyle()
    sub2Style.setBold(true)
    sub2Style.setFontSize(14)
    sub2Style.setFontFamily('Lato')
    sub2Style.setForegroundColor('#000000')
    sub2.setTop(270)
    sub2.setLeft(265)
    sub2.setWidth(180)
  
    const info2 = slide.insertTextBox('Explore the rich history of the indus valley and vaidic civilization')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2.setTop(300)
    info2.setLeft(265)
    info2.setWidth(180)
  
    const image3 = slide.insertImage('https://static.theprint.in/wp-content/uploads/2023/07/Army-1-1024x576.jpg?compress=true')
    image3.setHeight(160)
    image3.setWidth(190)
    image3.setTop(70)
    image3.setLeft(460)
  
    const sub3 = slide.insertTextBox('Ancient Civilization')
    const sub3Style = sub3.getText().getTextStyle()
    sub3Style.setBold(true)
    sub3Style.setFontSize(14)
    sub3Style.setFontFamily('Lato')
    sub3Style.setForegroundColor('#000000')
    sub3.setTop(230)
    sub3.setLeft(465)
    sub3.setWidth(190)
  
    const info3 = slide.insertTextBox('Explore the rich history of the indus valley and vaidic civilization')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3.setTop(260)
    info3.setLeft(465)
    info3.setWidth(190)
  
    const line1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 190, 2.5);
    line1.setWeight(4)
    line1.setTop(250)
    line1.setLeft(45)
    line1.getLineFill().setSolidFill('#f5dd23')
    
    const line2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 180, 2.5);
    line2.setWeight(4)
    line2.setTop(270)
    line2.setLeft(260)
    line2.getLineFill().setSolidFill('#f5dd23')
  
    const line3 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 190, 2.5);
    line3.setWeight(4)
    line3.setTop(230)
    line3.setLeft(460)
    line3.getLineFill().setSolidFill('#f5dd23') 
  }
  




  // Slide 17
function createFiveSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(350)
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(60)
    image1.setTop(110)
    image1.setHeight(30)
    image1.setWidth(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(385)
    image2.setTop(110)
    image2.setHeight(30)
    image2.setWidth(30)
  
    const subtitle1 = slide.insertTextBox('History of 1990 BC')
    const subtitle1Style = subtitle1.getText().getTextStyle()
    subtitle1Style.setFontSize(14)
    subtitle1Style.setFontFamily('Lato')
    subtitle1Style.setForegroundColor('#0000FF')
    subtitle1Style.setBold(true)
    const subtitle1Range = subtitle1.getText();
    const subtitle1paragraphStyle = subtitle1Range.getParagraphStyle();
    subtitle1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle1.setTop(150)
    subtitle1.setLeft(45)
    subtitle1.setWidth(150)
  
    const subtitle2 = slide.insertTextBox('Significance')
    const subtitle2Style = subtitle2.getText().getTextStyle()
    subtitle2Style.setFontSize(14)
    subtitle2Style.setFontFamily('Lato')
    subtitle2Style.setForegroundColor('#0000FF')
    subtitle2Style.setBold(true)
    const subtitle2Range = subtitle2.getText();
    const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
    subtitle2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle2.setTop(150)
    subtitle2.setLeft(320)
    subtitle2.setWidth(200)
  
    const vertLine1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 150)
    vertLine1.setLeft(60)
    vertLine1.setTop(195)
    vertLine1.setWeight(3)
    vertLine1.getLineFill().setSolidFill('#0000FF')
  
    const info1 = slide.insertTextBox('In 1999, India successfully launched the first indigenously developed satellite, INSAT-2E.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(195)
    info1.setLeft(70)
    info1.setWidth(250)
  
    const info2 = slide.insertTextBox('The Kargil War between India and Pakistan took place, resulting in a significant military conflict.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(235)
    info2.setLeft(70)
    info2.setWidth(250)
  
    const info3 = slide.insertTextBox('India established diplomatic relations with Israel, marking a milestone in bilateral ties.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(275)
    info3.setLeft(70)
    info3.setWidth(250)
  
    const vertLine2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 150)
    vertLine2.setLeft(385)
    vertLine2.setTop(195)
    vertLine2.setWeight(3)
    vertLine2.getLineFill().setSolidFill('#0000FF')
  
    const info4 = slide.insertTextBox("These milestones continue to shape India's trajectory in the 21st century.")
    const info4Style = info4.getText().getTextStyle()
    info4Style.setFontSize(11)
    info4Style.setFontFamily('Lato')
    info4Style.setForegroundColor('#000000')
    info4.setTop(195)
    info4.setLeft(395)
    info4.setWidth(250)
  
    const info5 = slide.insertTextBox('1999 was a pivotal year in Indian history, showcasing technological advancements and geopolitical developments.')
    const info5Style = info5.getText().getTextStyle()
    info5Style.setFontSize(11)
    info5Style.setFontFamily('Lato')
    info5Style.setForegroundColor('#000000')
    info5.setTop(235)
    info5.setLeft(395)
    info5.setWidth(250)
  
    const info6 = slide.insertTextBox("The events of 1999 had a lasting impact on India's defense strategy and foreign policy.")
    const info6Style = info6.getText().getTextStyle()
    info6Style.setFontSize(11)
    info6Style.setFontFamily('Lato')
    info6Style.setForegroundColor('#000000')
    info6.setTop(290)
    info6.setLeft(395)
    info6.setWidth(250)
  
  }





  // Slide 18
function createSixSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(350)
  
    const box1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    box1.setWidth(300)
    box1.setHeight(250)
    box1.setTop(100)
    box1.setLeft(50)
    box1.getBorder().getLineFill().setSolidFill('#FFA500')
    box1.getFill().setSolidFill('#ffffff')
  
    const box2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    box2.setWidth(300)
    box2.setHeight(250)
    box2.setTop(100)
    box2.setLeft(370)
    box2.getBorder().getLineFill().setSolidFill('#2d11ee')
    box2.getFill().setSolidFill('#ffffff')
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(60)
    image1.setTop(110)
    image1.setHeight(30)
    image1.setWidth(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(385)
    image2.setTop(110)
    image2.setHeight(30)
    image2.setWidth(30)
  
    const subtitle1 = slide.insertTextBox('History of 1990 BC')
    const subtitle1Style = subtitle1.getText().getTextStyle()
    subtitle1Style.setFontSize(14)
    subtitle1Style.setFontFamily('Lato')
    subtitle1Style.setForegroundColor('#FFA500')
    subtitle1Style.setBold(true)
    const subtitle1Range = subtitle1.getText();
    const subtitle1paragraphStyle = subtitle1Range.getParagraphStyle();
    subtitle1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle1.setTop(150)
    subtitle1.setLeft(45)
    subtitle1.setWidth(150)
  
    const subtitle2 = slide.insertTextBox('Significance')
    const subtitle2Style = subtitle2.getText().getTextStyle()
    subtitle2Style.setFontSize(14)
    subtitle2Style.setFontFamily('Lato')
    subtitle2Style.setForegroundColor('#000000')
    subtitle2Style.setBold(true)
    const subtitle2Range = subtitle2.getText();
    const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
    subtitle2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle2.setTop(150)
    subtitle2.setLeft(320)
    subtitle2.setWidth(200)
  
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(6)
    shape1.setHeight(6)
    shape1.setTop(205)
    shape1.setLeft(70)
    shape1.getBorder().getLineFill().setSolidFill('#FFA500')
    shape1.getFill().setSolidFill('#FFA500')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(6)
    shape2.setHeight(6)
    shape2.setTop(245)
    shape2.setLeft(70)
    shape2.getBorder().getLineFill().setSolidFill('#FFA500')
    shape2.getFill().setSolidFill('#FFA500')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(6)
    shape3.setHeight(6)
    shape3.setTop(285)
    shape3.setLeft(70)
    shape3.getBorder().getLineFill().setSolidFill('#FFA500')
    shape3.getFill().setSolidFill('#FFA500')
  
    const info1 = slide.insertTextBox('In 1999, India successfully launched the first indigenously developed satellite, INSAT-2E.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(195)
    info1.setLeft(90)
    info1.setWidth(250)
  
    const info2 = slide.insertTextBox('The Kargil War between India and Pakistan took place, resulting in a significant military conflict.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(235)
    info2.setLeft(90)
    info2.setWidth(250)
  
    const info3 = slide.insertTextBox('India established diplomatic relations with Israel, marking a milestone in bilateral ties.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(275)
    info3.setLeft(90)
    info3.setWidth(250)
  
    const shape4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape4.setWidth(6)
    shape4.setHeight(6)
    shape4.setTop(205)
    shape4.setLeft(395)
    shape4.getBorder().getLineFill().setSolidFill('#0000FF')
    shape4.getFill().setSolidFill('#0000FF')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(6)
    shape5.setHeight(6)
    shape5.setTop(245)
    shape5.setLeft(395)
    shape5.getBorder().getLineFill().setSolidFill('#0000FF')
    shape5.getFill().setSolidFill('#0000FF')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(6)
    shape6.setHeight(6)
    shape6.setTop(300)
    shape6.setLeft(395)
    shape6.getBorder().getLineFill().setSolidFill('#0000FF')
    shape6.getFill().setSolidFill('#0000FF')
  
    const info4 = slide.insertTextBox("These milestones continue to shape India's trajectory in the 21st century.")
    const info4Style = info4.getText().getTextStyle()
    info4Style.setFontSize(11)
    info4Style.setFontFamily('Lato')
    info4Style.setForegroundColor('#000000')
    info4.setTop(195)
    info4.setLeft(420)
    info4.setWidth(250)
  
    const info5 = slide.insertTextBox('1999 was a pivotal year in Indian history, showcasing technological advancements and geopolitical developments.')
    const info5Style = info5.getText().getTextStyle()
    info5Style.setFontSize(11)
    info5Style.setFontFamily('Lato')
    info5Style.setForegroundColor('#000000')
    info5.setTop(235)
    info5.setLeft(420)
    info5.setWidth(250)
  
    const info6 = slide.insertTextBox("The events of 1999 had a lasting impact on India's defense strategy and foreign policy.")
    const info6Style = info6.getText().getTextStyle()
    info6Style.setFontSize(11)
    info6Style.setFontFamily('Lato')
    info6Style.setForegroundColor('#000000')
    info6.setTop(290)
    info6.setLeft(420)
    info6.setWidth(250)
  
  }





  // Slide 11
function createSevenSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(30)
    title.setWidth(350)
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(50)
    image1.setTop(130)
    image1.setHeight(20)
    image1.setWidth(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(270)
    image2.setTop(130)
    image2.setHeight(20)
    image2.setWidth(20)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(490)
    image3.setTop(130)
    image3.setHeight(20)
    image3.setWidth(20)
  
    const info1 = slide.insertTextBox('Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(170)
    info1.setLeft(45)
    info1.setWidth(190)
  
    const vertLine1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 172)
    vertLine1.setLeft(40)
    vertLine1.setTop(120)
    vertLine1.setWeight(3)
    vertLine1.getLineFill().setSolidFill('#0000FF')
  
    const info2 = slide.insertTextBox('Use of bronze tools, advanced urban planning, and sophisticated pottery techniques characterize the period.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(170)
    info2.setLeft(265)
    info2.setWidth(190)
  
    const vertLine2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 172)
    vertLine2.setLeft(260)
    vertLine2.setTop(120)
    vertLine2.setWeight(3)
    vertLine2.getLineFill().setSolidFill('#0000FF')
  
    const info3 = slide.insertTextBox('Social hierarchy with priests and rulers at the top, skilled artisans and traders, and farmers forming the majority of the population.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(170)
    info3.setLeft(485)
    info3.setWidth(190)
  
    const vertLine3 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 172)
    vertLine3.setLeft(480)
    vertLine3.setTop(120)
    vertLine3.setWeight(3)
    vertLine3.getLineFill().setSolidFill('#0000FF')
  
  }






  //Slide 1
function createEightSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title  = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(50)
    title.setWidth(350)
  
     const shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape1.setWidth(285)
    shape1.setHeight(130)
    shape1.setTop(100)
    shape1.setLeft(50)
    shape1.getBorder().getLineFill().setSolidFill('#2d11ee')
    shape1.getFill().setSolidFill('#ffffff')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape2.setWidth(285)
    shape2.setHeight(130)
    shape2.setTop(100)
    shape2.setLeft(350)
    shape2.getBorder().getLineFill().setSolidFill('#2d11ee')
    shape2.getFill().setSolidFill('#ffffff')
  
      const shape3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape3.setWidth(285)
    shape3.setHeight(130)
    shape3.setTop(240)
    shape3.setLeft(50)
    shape3.getBorder().getLineFill().setSolidFill('#2d11ee')
    shape3.getFill().setSolidFill('#ffffff')
  
      const shape4 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape4.setWidth(285)
    shape4.setHeight(130)
    shape4.setTop(240)
    shape4.setLeft(350)
    shape4.getBorder().getLineFill().setSolidFill('#2d11ee')
    shape4.getFill().setSolidFill('#ffffff')
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(60)
    image1.setTop(110)
    image1.setHeight(20)
    image1.setWidth(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(360)
    image2.setTop(110)
    image2.setHeight(20)
    image2.setWidth(20)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(60)
    image3.setTop(250)
    image3.setHeight(20)
    image3.setWidth(20)
  
    const image4 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image4.setLeft(360)
    image4.setTop(250)
    image4.setHeight(20)
    image4.setWidth(20)
  
    const info1  = slide.insertTextBox('In 1990BC, the Indus Valley Civilization flourished with advanced urban planning, trade networks, and sophisticated drainage systems.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(140)
    info1.setLeft(55)
    info1.setWidth(230)
  
    const info2  = slide.insertTextBox('The civilization in the Indian subcontinent displayed remarkable advancements in art, science, and governance.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(140)
    info2.setLeft(355)
    info2.setWidth(230)
  
    const info3  = slide.insertTextBox('Indian history in 1990BC saw the development of the earliest forms of writing, including the Indus script, and intricate jewelry-making techniques.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(280)
    info3.setLeft(55)
    info3.setWidth(230)
  
    const info4  = slide.insertTextBox('Trade in 1990BC was vital to the economy, with exports of goods such as pottery, beads, and textiles to Mesopotamia and other regions.')
    const info4Style = info4.getText().getTextStyle()
    info4Style.setFontSize(11)
    info4Style.setFontFamily('Lato')
    info4Style.setForegroundColor('#000000')
    info4.setTop(280)
    info4.setLeft(355)
    info4.setWidth(230)
  }






  // Slide 8
function createNineSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(350)
  
    const box1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
    box1.getBorder().setWeight(1);
    box1.getFill().setSolidFill('#FFFFFF');
    box1.getBorder().getLineFill().setSolidFill('#0000FF');
    box1.setLeft(40);
    box1.setTop(100);
    box1.setWidth(210);
    box1.setHeight(270);
  
    const box2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
    box2.getBorder().setWeight(1);
    box2.getFill().setSolidFill('#FFFFFF');
    box2.getBorder().getLineFill().setSolidFill('#0000FF');
    box2.setLeft(260);
    box2.setTop(100);
    box2.setWidth(210);
    box2.setHeight(270);
  
    const box3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
    box3.getBorder().setWeight(1);
    box3.getFill().setSolidFill('#FFFFFF');
    box3.getBorder().getLineFill().setSolidFill('#0000FF');
    box3.setLeft(480);
    box3.setTop(100);
    box3.setWidth(210);
    box3.setHeight(270);
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(50)
    image1.setTop(110)
    image1.setHeight(30)
    image1.setWidth(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(270)
    image2.setTop(110)
    image2.setHeight(30)
    image2.setWidth(30)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(490)
    image3.setTop(110)
    image3.setHeight(30)
    image3.setWidth(30)
  
    const subtitle1 = slide.insertTextBox('Civilization')
    const subtitle1Style = subtitle1.getText().getTextStyle()
    subtitle1Style.setFontSize(14)
    subtitle1Style.setFontFamily('Lato')
    subtitle1Style.setForegroundColor('#0000FF')
    subtitle1Style.setBold(true)
    subtitle1.setTop(150)
    subtitle1.setLeft(45)
    subtitle1.setWidth(150)
  
    const subtitle2 = slide.insertTextBox('Technology')
    const subtitle2Style = subtitle2.getText().getTextStyle()
    subtitle2Style.setFontSize(14)
    subtitle2Style.setFontFamily('Lato')
    subtitle2Style.setForegroundColor('#0000FF')
    subtitle2Style.setBold(true)
    subtitle2.setTop(150)
    subtitle2.setLeft(265)
    subtitle2.setWidth(150)
  
    const subtitle3 = slide.insertTextBox('Society')
    const subtitle3Style = subtitle3.getText().getTextStyle()
    subtitle3Style.setFontSize(14)
    subtitle3Style.setFontFamily('Lato')
    subtitle3Style.setForegroundColor('#0000FF')
    subtitle3Style.setBold(true)
    subtitle3.setTop(150)
    subtitle3.setLeft(485)
    subtitle3.setWidth(150)
  
    const info1 = slide.insertTextBox('Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(200)
    info1.setLeft(45)
    info1.setWidth(180)
  
    const info2 = slide.insertTextBox('Use of bronze tools, advanced urban planning, and sophisticated pottery techniques characterize the period.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(200)
    info2.setLeft(265)
    info2.setWidth(180)
  
    const info3 = slide.insertTextBox('Social hierarchy with priests and rulers at the top, skilled artisans and traders, and farmers forming the majority of the population.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(200)
    info3.setLeft(485)
    info3.setWidth(180)
  
  }





  // Slide 16
function createTenSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(350)
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(60)
    image1.setTop(110)
    image1.setHeight(30)
    image1.setWidth(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(385)
    image2.setTop(110)
    image2.setHeight(30)
    image2.setWidth(30)
  
    const subtitle1 = slide.insertTextBox('History of 1990 BC')
    const subtitle1Style = subtitle1.getText().getTextStyle()
    subtitle1Style.setFontSize(14)
    subtitle1Style.setFontFamily('Lato')
    subtitle1Style.setForegroundColor('#000000')
    subtitle1Style.setBold(true)
    const subtitle1Range = subtitle1.getText();
    const subtitle1paragraphStyle = subtitle1Range.getParagraphStyle();
    subtitle1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle1.setTop(150)
    subtitle1.setLeft(45)
    subtitle1.setWidth(150)
  
    const subtitle2 = slide.insertTextBox('Significance')
    const subtitle2Style = subtitle2.getText().getTextStyle()
    subtitle2Style.setFontSize(14)
    subtitle2Style.setFontFamily('Lato')
    subtitle2Style.setForegroundColor('#000000')
    subtitle2Style.setBold(true)
    const subtitle2Range = subtitle2.getText();
    const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
    subtitle2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle2.setTop(150)
    subtitle2.setLeft(320)
    subtitle2.setWidth(200)
  
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(6)
    shape1.setHeight(6)
    shape1.setTop(205)
    shape1.setLeft(70)
    shape1.getBorder().getLineFill().setSolidFill('#0000FF')
    shape1.getFill().setSolidFill('#0000FF')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(6)
    shape2.setHeight(6)
    shape2.setTop(245)
    shape2.setLeft(70)
    shape2.getBorder().getLineFill().setSolidFill('#0000FF')
    shape2.getFill().setSolidFill('#0000FF')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(6)
    shape3.setHeight(6)
    shape3.setTop(285)
    shape3.setLeft(70)
    shape3.getBorder().getLineFill().setSolidFill('#0000FF')
    shape3.getFill().setSolidFill('#0000FF')
  
    const info1 = slide.insertTextBox('In 1999, India successfully launched the first indigenously developed satellite, INSAT-2E.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(195)
    info1.setLeft(90)
    info1.setWidth(250)
  
    const info2 = slide.insertTextBox('The Kargil War between India and Pakistan took place, resulting in a significant military conflict.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(235)
    info2.setLeft(90)
    info2.setWidth(250)
  
    const info3 = slide.insertTextBox('India established diplomatic relations with Israel, marking a milestone in bilateral ties.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(275)
    info3.setLeft(90)
    info3.setWidth(250)
  
    const shape4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape4.setWidth(6)
    shape4.setHeight(6)
    shape4.setTop(205)
    shape4.setLeft(395)
    shape4.getBorder().getLineFill().setSolidFill('#0000FF')
    shape4.getFill().setSolidFill('#0000FF')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(6)
    shape5.setHeight(6)
    shape5.setTop(245)
    shape5.setLeft(395)
    shape5.getBorder().getLineFill().setSolidFill('#0000FF')
    shape5.getFill().setSolidFill('#0000FF')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(6)
    shape6.setHeight(6)
    shape6.setTop(300)
    shape6.setLeft(395)
    shape6.getBorder().getLineFill().setSolidFill('#0000FF')
    shape6.getFill().setSolidFill('#0000FF')
  
    const info4 = slide.insertTextBox("These milestones continue to shape India's trajectory in the 21st century.")
    const info4Style = info4.getText().getTextStyle()
    info4Style.setFontSize(11)
    info4Style.setFontFamily('Lato')
    info4Style.setForegroundColor('#000000')
    info4.setTop(195)
    info4.setLeft(420)
    info4.setWidth(250)
  
    const info5 = slide.insertTextBox('1999 was a pivotal year in Indian history, showcasing technological advancements and geopolitical developments.')
    const info5Style = info5.getText().getTextStyle()
    info5Style.setFontSize(11)
    info5Style.setFontFamily('Lato')
    info5Style.setForegroundColor('#000000')
    info5.setTop(235)
    info5.setLeft(420)
    info5.setWidth(250)
  
    const info6 = slide.insertTextBox("The events of 1999 had a lasting impact on India's defense strategy and foreign policy.")
    const info6Style = info6.getText().getTextStyle()
    info6Style.setFontSize(11)
    info6Style.setFontFamily('Lato')
    info6Style.setForegroundColor('#000000')
    info6.setTop(290)
    info6.setLeft(420)
    info6.setWidth(250)
  
  }





  // Slide 15
function createElevenSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(350)
  
    const line1= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,0, 2.5, 720, 2.5)
    // line1.setLeft(1)
    line1.setTop(120)
    line1.setWeight(2)
    line1.getLineFill().setSolidFill('#2d11ee')
  
     const circle1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle1.setWidth(30)
    circle1.setHeight(30)
    circle1.setTop(105)
    circle1.setLeft(160)
    circle1.getFill().setSolidFill('#ffffff')
    circle1.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle1.getBorder().setWeight(2);
  
    const circle2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle2.setWidth(30)
    circle2.setHeight(30)
    circle2.setTop(105)
    circle2.setLeft(500)
    circle2.getFill().setSolidFill('#ffffff')
    circle2.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle2.getBorder().setWeight(2);
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(165)
    image1.setTop(110)
    image1.setHeight(20)
    image1.setWidth(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(505)
    image2.setTop(110)
    image2.setHeight(20)
    image2.setWidth(20)
  
    const subtitle1 = slide.insertTextBox('History of 1990 BC')
    const subtitle1Style = subtitle1.getText().getTextStyle()
    subtitle1Style.setFontSize(14)
    subtitle1Style.setFontFamily('Lato')
    subtitle1Style.setForegroundColor('#000000')
    subtitle1Style.setBold(true)
    const subtitle1Range = subtitle1.getText();
    const subtitle1paragraphStyle = subtitle1Range.getParagraphStyle();
    subtitle1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle1.setTop(150)
    subtitle1.setLeft(100)
    subtitle1.setWidth(150)
  
    const subtitle2 = slide.insertTextBox('Significance')
    const subtitle2Style = subtitle2.getText().getTextStyle()
    subtitle2Style.setFontSize(14)
    subtitle2Style.setFontFamily('Lato')
    subtitle2Style.setForegroundColor('#000000')
    subtitle2Style.setBold(true)
    const subtitle2Range = subtitle2.getText();
    const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
    subtitle2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle2.setTop(150)
    subtitle2.setLeft(420)
    subtitle2.setWidth(200)
  
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(6)
    shape1.setHeight(6)
    shape1.setTop(233)
    shape1.setLeft(60)
    shape1.getBorder().getLineFill().setSolidFill('#0000FF')
    shape1.getFill().setSolidFill('#0000FF')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(6)
    shape2.setHeight(6)
    shape2.setTop(273)
    shape2.setLeft(60)
    shape2.getBorder().getLineFill().setSolidFill('#0000FF')
    shape2.getFill().setSolidFill('#0000FF')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(6)
    shape3.setHeight(6)
    shape3.setTop(313)
    shape3.setLeft(60)
    shape3.getBorder().getLineFill().setSolidFill('#0000FF')
    shape3.getFill().setSolidFill('#0000FF')
  
    const info1 = slide.insertTextBox('In 1999, India successfully launched the first indigenously developed satellite, INSAT-2E.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(220)
    info1.setLeft(80)
    info1.setWidth(250)
  
    const info2 = slide.insertTextBox('The Kargil War between India and Pakistan took place, resulting in a significant military conflict.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(260)
    info2.setLeft(80)
    info2.setWidth(250)
  
    const info3 = slide.insertTextBox('India established diplomatic relations with Israel, marking a milestone in bilateral ties.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(300)
    info3.setLeft(80)
    info3.setWidth(250)
  
    const shape4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape4.setWidth(6)
    shape4.setHeight(6)
    shape4.setTop(233)
    shape4.setLeft(385)
    shape4.getBorder().getLineFill().setSolidFill('#0000FF')
    shape4.getFill().setSolidFill('#0000FF')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(6)
    shape5.setHeight(6)
    shape5.setTop(273)
    shape5.setLeft(385)
    shape5.getBorder().getLineFill().setSolidFill('#0000FF')
    shape5.getFill().setSolidFill('#0000FF')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(6)
    shape6.setHeight(6)
    shape6.setTop(323)
    shape6.setLeft(385)
    shape6.getBorder().getLineFill().setSolidFill('#0000FF')
    shape6.getFill().setSolidFill('#0000FF')
  
    const info4 = slide.insertTextBox("These milestones continue to shape India's trajectory in the 21st century.")
    const info4Style = info4.getText().getTextStyle()
    info4Style.setFontSize(11)
    info4Style.setFontFamily('Lato')
    info4Style.setForegroundColor('#000000')
    info4.setTop(220)
    info4.setLeft(410)
    info4.setWidth(250)
  
    const info5 = slide.insertTextBox('1999 was a pivotal year in Indian history, showcasing technological advancements and geopolitical developments.')
    const info5Style = info5.getText().getTextStyle()
    info5Style.setFontSize(11)
    info5Style.setFontFamily('Lato')
    info5Style.setForegroundColor('#000000')
    info5.setTop(260)
    info5.setLeft(410)
    info5.setWidth(250)
  
    const info6 = slide.insertTextBox("The events of 1999 had a lasting impact on India's defense strategy and foreign policy.")
    const info6Style = info6.getText().getTextStyle()
    info6Style.setFontSize(11)
    info6Style.setFontFamily('Lato')
    info6Style.setForegroundColor('#000000')
    info6.setTop(310)
    info6.setLeft(410)
    info6.setWidth(250)
  
  }





function createTwelveSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
  
    // Title text box
    const title = slide.insertTextBox('Indian History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('Lato')
    titleStyle.setForegroundColor('#000000')
    titleStyle.setBold(true)
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(350)
  
  
    // Three rectangles
    const shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape1.getBorder().setTransparent();
    shape1.setWidth(200)
    shape1.setHeight(120)
    shape1.setTop(100)
    shape1.setLeft(30)
    shape1.getFill().setSolidFill('#ffffff')
  
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape2.getBorder().setTransparent();
    shape2.setWidth(200)
    shape2.setHeight(120)
    shape2.setTop(100)
    shape2.setLeft(260) // Increased gap between shapes
    shape2.getFill().setSolidFill('#ffffff')
  
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape3.getBorder().setTransparent();
    shape3.setWidth(200)
    shape3.setHeight(120)
    shape3.setTop(100)
    shape3.setLeft(490) // Increased gap between shapes
    shape3.getFill().setSolidFill('#ffffff')
  
  
    // Three circles
    const circle1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle1.setWidth(50) // Increased circle size
    circle1.setHeight(50) // Increased circle size
    circle1.setTop(100)
    circle1.setLeft(100) // Adjusted left position for reduced logo left space
    circle1.getFill().setSolidFill('#ffffff')
    circle1.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle1.getBorder().setWeight(2);
  
  
    const circle2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle2.setWidth(50) // Increased circle size
    circle2.setHeight(50) // Increased circle size
    circle2.setTop(100)
    circle2.setLeft(300) // Adjusted left position for reduced logo left space
    circle2.getFill().setSolidFill('#ffffff')
    circle2.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle2.getBorder().setWeight(2);
  
  
    const circle3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle3.setWidth(50) // Increased circle size
    circle3.setHeight(50) // Increased circle size
    circle3.setTop(100)
    circle3.setLeft(500) // Adjusted left position for reduced logo left space
    circle3.getFill().setSolidFill('#ffffff')
    circle3.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle3.getBorder().setWeight(2);
  
  
    // Logo images
    const logoSize = 20; // Assuming logo size is 20x20
  
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(circle1.getLeft() + (circle1.getWidth() - logoSize) / 2) // Adjusted left position for centering logo
    image1.setTop(circle1.getTop() + (circle1.getHeight() - logoSize) / 2)  // Adjusted top position for centering logo
    image1.setHeight(logoSize)
    image1.setWidth(logoSize)
  
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(circle2.getLeft() + (circle2.getWidth() - logoSize) / 2) // Adjusted left position for centering logo
    image2.setTop(circle2.getTop() + (circle2.getHeight() - logoSize) / 2)  // Adjusted top position for centering logo
    image2.setHeight(logoSize)
    image2.setWidth(logoSize)
  
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(circle3.getLeft() + (circle3.getWidth() - logoSize) / 2) // Adjusted left position for centering logo
    image3.setTop(circle3.getTop() + (circle3.getHeight() - logoSize) / 2)  // Adjusted top position for centering logo
    image3.setHeight(logoSize)
    image3.setWidth(logoSize)
  
  
    // Information text boxes
    const info1 = slide.insertTextBox('Kargil War between India and Pakistan took place.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    const info1Range = info1.getText();
    const info1paragraphStyle = info1Range.getParagraphStyle();
    info1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info1.setTop(170) // Reduced the top margin
    info1.setLeft(45) // Adjusted left position for better alignment
    info1.setWidth(150) // Reduced width for better alignment
  
  
    const info2 = slide.insertTextBox("India's population crossed the 1 billion mark in 1999.")
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    const info2Range = info2.getText();
    const info2paragraphStyle = info2Range.getParagraphStyle();
    info2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info2.setTop(170) // Reduced the top margin
    info2.setLeft(250) // Adjusted left position for better alignment
    info2.setWidth(150) // Reduced width for better alignment
  
  
    const info3 = slide.insertTextBox('Indian Prime Minister Atal Bihari Vajpayee visited Pakistan to discuss peace efforts.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    const info3Range = info3.getText();
    const info3paragraphStyle = info3Range.getParagraphStyle();
    info3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info3.setTop(170) // Reduced the top margin
    info3.setLeft(450) // Adjusted left position for better alignment
    info3.setWidth(150) // Reduced width for better alignment
  
  
    // Save the presentation
    presentation.saveAndClose();
  }

// Run the script to create the combined presentation
createCombinedPresentation();
