function createCombinedPresentation() {
    const presentation = SlidesApp.create("Combined Presentation");

 createThirteenSlide(presentation, 0);
    createFourteenSlide(presentation, 1);
    createFifteenSlide(presentation, 2);
    createSixteenSlide(presentation, 3);
    createSeventeenSlide(presentation, 4);
    createEighteenSlide(presentation, 5);
    createNinteenSlide(presentation, 6);
    createTwentySlide(presentation, 7);
    createTwentyOneSlide(presentation, 8);
    createTwentyTwoSlide(presentation, 9);
    createTwentyThreeSlide(presentation, 10);
    createTwentyFourSlide(presentation, 11);
    createTwentyFiveSlide(presentation, 12);
    createTwentySixSlide(presentation, 13);
    createTwentySevenSlide(presentation, 14);
    createTwentyEightSlide(presentation, 15);

}

//   // Slide 13
function createThirteenSlide(presentation, index) {
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
  
    const circle1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle1.setWidth(50)
    circle1.setHeight(50)
    circle1.setTop(120)
    circle1.setLeft(100)
    circle1.getFill().setSolidFill('#ffffff')
    circle1.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle1.getBorder().setWeight(2);
  
    const circle2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle2.setWidth(50)
    circle2.setHeight(50)
    circle2.setTop(120)
    circle2.setLeft(320)
    circle2.getFill().setSolidFill('#ffffff')
    circle2.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle2.getBorder().setWeight(2);
  
    const circle3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle3.setWidth(50)
    circle3.setHeight(50)
    circle3.setTop(120)
    circle3.setLeft(550)
    circle3.getFill().setSolidFill('#ffffff')
    circle3.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle3.getBorder().setWeight(2);
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(115)
    image1.setTop(135)
    image1.setHeight(20)
    image1.setWidth(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(335)
    image2.setTop(135)
    image2.setHeight(20)
    image2.setWidth(20)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(565)
    image3.setTop(135)
    image3.setHeight(20)
    image3.setWidth(20)
  
    const info1 = slide.insertTextBox('The history of India dates back to around 1990 BC, known as the Indus Valley Civilization, characterized by advanced urban planning and trade.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    const info1Range = info1.getText();
    const info1paragraphStyle = info1Range.getParagraphStyle();
    info1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info1.setTop(180)
    info1.setLeft(35)
    info1.setWidth(180)
  
    const info2 = slide.insertTextBox('The Vedic period followed, marked by the composition of the Vedas and the emergence of early Hinduism.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    const info2Range = info2.getText();
    const info2paragraphStyle = info2Range.getParagraphStyle();
    info2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info2.setTop(180)
    info2.setLeft(255)
    info2.setWidth(180)
  
    const info3 = slide.insertTextBox('In 327 BC, Alexander the Great invaded Northwestern India, leaving a lasting impact on Indian culture and history.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    const info3Range = info3.getText();
    const info3paragraphStyle = info3Range.getParagraphStyle();
    info3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info3.setTop(180)
    info3.setLeft(485)
    info3.setWidth(180)
  }





  // Slide 12
function createFourteenSlide(presentation, index) {
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
    circle1.setLeft(125)
    circle1.getFill().setSolidFill('#ffffff')
    circle1.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle1.getBorder().setWeight(2);
  
    const circle2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle2.setWidth(30)
    circle2.setHeight(30)
    circle2.setTop(105)
    circle2.setLeft(320)
    circle2.getFill().setSolidFill('#ffffff')
    circle2.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle2.getBorder().setWeight(2);
  
    const circle3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle3.setWidth(30)
    circle3.setHeight(30)
    circle3.setTop(105)
    circle3.setLeft(515)
    circle3.getFill().setSolidFill('#ffffff')
    circle3.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle3.getBorder().setWeight(2);
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(130)
    image1.setTop(110)
    image1.setHeight(20)
    image1.setWidth(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(325)
    image2.setTop(110)
    image2.setHeight(20)
    image2.setWidth(20)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(520)
    image3.setTop(110)
    image3.setHeight(20)
    image3.setWidth(20)
  
    const info1 = slide.insertTextBox('In 1990 BC, the Indian subcontinent saw the emergence of the Indus Valley Civilization.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    const info1Range = info1.getText();
    const info1paragraphStyle = info1Range.getParagraphStyle();
    info1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info1.setTop(150)
    info1.setLeft(50)
    info1.setWidth(190)
  
    const info2 = slide.insertTextBox('The civilization flourished along the Indus River and is renowned for its well-planned cities like Mohenjo-Daro.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    const info2Range = info2.getText();
    const info2paragraphStyle = info2Range.getParagraphStyle();
    info2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info2.setTop(150)
    info2.setLeft(240)
    info2.setWidth(190)
  
    const info3 = slide.insertTextBox('During this period, the Indus Valley people developed a writing system, intricate jewelry-making techniques showcasing a rich cultural exchange.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    const info3Range = info3.getText();
    const info3paragraphStyle = info3Range.getParagraphStyle();
    info3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info3.setTop(150)
    info3.setLeft(440)
    info3.setWidth(190)
  
  }





  //Slide 5
function createFifteenSlide(presentation, index) {
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
    circle1.setLeft(125)
    circle1.getFill().setSolidFill('#ffffff')
    circle1.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle1.getBorder().setWeight(2);
  
    const circle2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle2.setWidth(30)
    circle2.setHeight(30)
    circle2.setTop(105)
    circle2.setLeft(310)
    circle2.getFill().setSolidFill('#ffffff')
    circle2.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle2.getBorder().setWeight(2);
  
    const circle3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle3.setWidth(30)
    circle3.setHeight(30)
    circle3.setTop(105)
    circle3.setLeft(495)
    circle3.getFill().setSolidFill('#ffffff')
    circle3.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle3.getBorder().setWeight(2);
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(130)
    image1.setTop(110)
    image1.setHeight(20)
    image1.setWidth(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(315)
    image2.setTop(110)
    image2.setHeight(20)
    image2.setWidth(20)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(500)
    image3.setTop(110)
    image3.setHeight(20)
    image3.setWidth(20)
  
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
    subtitle1.setLeft(65)
    subtitle1.setWidth(150)
  
    const subtitle2 = slide.insertTextBox('Indus Valley Civilization')
    const subtitle2Style = subtitle2.getText().getTextStyle()
    subtitle2Style.setFontSize(14)
    subtitle2Style.setFontFamily('Lato')
    subtitle2Style.setForegroundColor('#0000FF')
    subtitle2Style.setBold(true)
    const subtitle2Range = subtitle2.getText();
    const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
    subtitle2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle2.setTop(150)
    subtitle2.setLeft(220)
    subtitle2.setWidth(200)
  
    const subtitle3 = slide.insertTextBox('Cultural Advancements')
    const subtitle3Style = subtitle3.getText().getTextStyle()
    subtitle3Style.setFontSize(14)
    subtitle3Style.setFontFamily('Lato')
    subtitle3Style.setForegroundColor('#0000FF')
    subtitle3Style.setBold(true)
    const subtitle3Range = subtitle3.getText();
    const subtitle3paragraphStyle = subtitle3Range.getParagraphStyle();
    subtitle3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle3.setTop(150)
    subtitle3.setLeft(410)
    subtitle3.setWidth(200)
  
    const info1 = slide.insertTextBox('In 1990 BC, the Indian subcontinent saw the emergence of the Indus Valley Civilization.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    const info1Range = info1.getText();
    const info1paragraphStyle = info1Range.getParagraphStyle();
    info1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info1.setTop(200)
    info1.setLeft(65)
    info1.setWidth(150)
  
    const info2 = slide.insertTextBox('The civilization flourished along the Indus River and is renowned for its well-planned cities like Mohenjo-Daro.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    const info2Range = info2.getText();
    const info2paragraphStyle = info2Range.getParagraphStyle();
    info2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info2.setTop(200)
    info2.setLeft(250)
    info2.setWidth(150)
  
    const info3 = slide.insertTextBox('During this period, the Indus Valley people developed a writing system, intricate jewelry-making techniques showcasing a rich cultural exchange.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    const info3Range = info3.getText();
    const info3paragraphStyle = info3Range.getParagraphStyle();
    info3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info3.setTop(200)
    info3.setLeft(440)
    info3.setWidth(150)
  
  }






  // Slide 7
function createSixteenSlide(presentation, index) {
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
  
     const circle1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle1.setWidth(50)
    circle1.setHeight(50)
    circle1.setTop(100)
    circle1.setLeft(100)
    circle1.getFill().setSolidFill('#ffffff')
    circle1.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle1.getBorder().setWeight(2);
  
    const circle2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle2.setWidth(50)
    circle2.setHeight(50)
    circle2.setTop(100)
    circle2.setLeft(320)
    circle2.getFill().setSolidFill('#ffffff')
    circle2.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle2.getBorder().setWeight(2);
  
    const circle3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    circle3.setWidth(50)
    circle3.setHeight(50)
    circle3.setTop(100)
    circle3.setLeft(550)
    circle3.getFill().setSolidFill('#ffffff')
    circle3.getBorder().getLineFill().setSolidFill('#2d11ee')
    circle3.getBorder().setWeight(2);
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(115)
    image1.setTop(115)
    image1.setHeight(20)
    image1.setWidth(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(335)
    image2.setTop(115)
    image2.setHeight(20)
    image2.setWidth(20)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(565)
    image3.setTop(115)
    image3.setHeight(20)
    image3.setWidth(20)
  
    const subtitle1 = slide.insertTextBox('1999')
    const subtitle1Style = subtitle1.getText().getTextStyle()
    subtitle1Style.setFontSize(14)
    subtitle1Style.setFontFamily('Lato')
    subtitle1Style.setForegroundColor('#0000FF')
    subtitle1Style.setBold(true)
    const subtitle1Range = subtitle1.getText();
    const subtitle1paragraphStyle = subtitle1Range.getParagraphStyle();
    subtitle1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle1.setTop(155)
    subtitle1.setLeft(50)
    subtitle1.setWidth(150)
  
    const subtitle2 = slide.insertTextBox('Technological Advancements')
    const subtitle2Style = subtitle2.getText().getTextStyle()
    subtitle2Style.setFontSize(14)
    subtitle2Style.setFontFamily('Lato')
    subtitle2Style.setForegroundColor('#0000FF')
    subtitle2Style.setBold(true)
    const subtitle2Range = subtitle2.getText();
    const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
    subtitle2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle2.setTop(155)
    subtitle2.setLeft(270)
    subtitle2.setWidth(150)
  
    const subtitle3 = slide.insertTextBox('Political Landscape')
    const subtitle3Style = subtitle3.getText().getTextStyle()
    subtitle3Style.setFontSize(14)
    subtitle3Style.setFontFamily('Lato')
    subtitle3Style.setForegroundColor('#0000FF')
    subtitle3Style.setBold(true)
    const subtitle3Range = subtitle3.getText();
    const subtitle3paragraphStyle = subtitle3Range.getParagraphStyle();
    subtitle3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    subtitle3.setTop(155)
    subtitle3.setLeft(500)
    subtitle3.setWidth(150)
  
    const info1 = slide.insertTextBox('The history of India dates back to around 1990 BC, known as the Indus Valley Civilization, characterized by advanced urban planning and trade.')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    const info1Range = info1.getText();
    const info1paragraphStyle = info1Range.getParagraphStyle();
    info1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info1.setTop(210)
    info1.setLeft(35)
    info1.setWidth(180)
  
    const info2 = slide.insertTextBox('The Vedic period followed, marked by the composition of the Vedas and the emergence of early Hinduism.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    const info2Range = info2.getText();
    const info2paragraphStyle = info2Range.getParagraphStyle();
    info2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info2.setTop(210)
    info2.setLeft(255)
    info2.setWidth(180)
  
    const info3 = slide.insertTextBox('In 327 BC, Alexander the Great invaded Northwestern India, leaving a lasting impact on Indian culture and history.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    const info3Range = info3.getText();
    const info3paragraphStyle = info3Range.getParagraphStyle();
    info3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info3.setTop(210)
    info3.setLeft(485)
    info3.setWidth(180)
  }






  // Slide 21
function createSeventeenSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    // const slide = presentation.appendSlide();
    const title2 = slide.insertTextBox('Indian History')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const dotLine = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5,0,2.5,280)
    dotLine.setDashStyle(SlidesApp.DashStyle.DASH)
    dotLine.setTop(80)
    dotLine.setLeft(50)
  
  
    const line1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0,2.5,40,2.5)
    line1.setTop(127)
    line1.setLeft(50)
    line1.getLineFill().setSolidFill('#3339FF')
  
    const line2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0,2.5,40,2.5)
    line2.setLeft(50)
    line2.setTop(205)
    line2.getLineFill().setSolidFill('#33ACFF')
  
    const line3= slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0,2.5,40,2.5)
    line3.setTop(295)
    line3.setLeft(50)
    line3.getLineFill().setSolidFill('#F9FF33')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(6)
    shape5.setHeight(6)
    shape5.setTop(124)
    shape5.setLeft(47)
    shape5.getBorder().getLineFill().setSolidFill('#3339FF')
    shape5.getFill().setSolidFill('#3339FF')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(6)
    shape6.setHeight(6)
    shape6.setTop(202)
    shape6.setLeft(47)
    shape6.getBorder().getLineFill().setSolidFill('#33ACFF')
    shape6.getFill().setSolidFill('#33ACFF')
  
    const shape7 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape7.setWidth(6)
    shape7.setHeight(6)
    shape7.setTop(292)
    shape7.setLeft(47)
    shape7.getBorder().getLineFill().setSolidFill('#F9FF33')
    shape7.getFill().setSolidFill('#F9FF33')
  
  
    const description = slide.insertTextBox("In 1999, India celebrated the 50th anniversary of its independence from British rule.")
    const descStyle = description.getText().getTextStyle()
    description.setTop(113)
    description.setLeft(95)
    description.setWidth(450)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const description2 = slide.insertTextBox("The Kargil War between India and Pakistan took place in 1999, marking a significant military conflict in the region.")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(185)
    description2.setLeft(95)
    description2.setWidth(450)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const description3 = slide.insertTextBox("Indian Prime Minister Atal Bihari Vajpayee inaugurated the Delhi Metro in 1999, a major milestone in the country's infrastructure development.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(275)
    description3.setLeft(95)
    description3.setWidth(450)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  
    
  }





  //Slide 19
function createEighteenSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    // const slide = presentation.appendSlide();
    const title2 = slide.insertTextBox('Indian History')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const dotLine = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5,0,2.5,280)
    dotLine.setDashStyle(SlidesApp.DashStyle.DASH)
    dotLine.setTop(80)
    dotLine.setLeft(50)
  
  
    const line1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0,2.5,40,2.5)
    line1.setTop(127)
    line1.setLeft(50)
    line1.getLineFill().setSolidFill('#3339FF')
  
    const line2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0,2.5,40,2.5)
    line2.setLeft(50)
    line2.setTop(205)
    line2.getLineFill().setSolidFill('#33ACFF')
  
    const line3= slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0,2.5,40,2.5)
    line3.setTop(295)
    line3.setLeft(50)
    line3.getLineFill().setSolidFill('#F9FF33')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(6)
    shape5.setHeight(6)
    shape5.setTop(124)
    shape5.setLeft(47)
    shape5.getBorder().getLineFill().setSolidFill('#3339FF')
    shape5.getFill().setSolidFill('#3339FF')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(6)
    shape6.setHeight(6)
    shape6.setTop(202)
    shape6.setLeft(47)
    shape6.getBorder().getLineFill().setSolidFill('#33ACFF')
    shape6.getFill().setSolidFill('#33ACFF')
  
    const shape7 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape7.setWidth(6)
    shape7.setHeight(6)
    shape7.setTop(292)
    shape7.setLeft(47)
    shape7.getBorder().getLineFill().setSolidFill('#F9FF33')
    shape7.getFill().setSolidFill('#F9FF33')
   
    const subtitle = slide.insertTextBox('History of 1999')
    const subStyle = subtitle.getText().getTextStyle()
    subtitle.setTop(110)
    subtitle.setLeft(110)
    subtitle.setWidth(250)
    subStyle.setForegroundColor('#000000')
    subStyle.setFontSize(14)
    subStyle.setFontFamily('Lato')
    subStyle.setBold(true)
  
    const subtitle2 = slide.insertTextBox('Cultural Events')
    const subStyle2 = subtitle2.getText().getTextStyle()
    subtitle2.setTop(190)
    subtitle2.setLeft(110)
    subtitle2.setWidth(120)
    subStyle2.setForegroundColor('#000000')
    subStyle2.setFontSize(14)
    subStyle2.setFontFamily('Lato')
    subStyle2.setBold(true)
  
    const subtitle3 = slide.insertTextBox('Economic Milestones')
    const subStyle3 = subtitle3.getText().getTextStyle()
    subtitle3.setTop(270)
    subtitle3.setLeft(110)
    subtitle3.setWidth(100)
    subStyle3.setForegroundColor('#000000')
    subStyle3.setFontSize(14)
    subStyle3.setFontFamily('Lato')
    subStyle3.setBold(true)
  
  
    const description = slide.insertTextBox("In 1999, India saw significant advancements in technology, with the launch of the Indian Space Research Organisation's first indigenously developed satellite, IRS-1C. The Kargil War between India and Pakistan also took place during this year.")
    const descStyle = description.getText().getTextStyle()
    description.setTop(90)
    description.setLeft(250)
    description.setWidth(380)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const description2 = slide.insertTextBox("1999 marked the release of the iconic Bollywood movie 'Hum Dil De Chuke Sanam' and the establishment of the National Museum of Indian Cinema in Mumbai.")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(180)
    description2.setLeft(250)
    description2.setWidth(380)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const description3 = slide.insertTextBox("The Indian economy in 1999 experienced growth in sectors like IT and telecommunications, laying the foundation for future development. The introduction of the Fiscal Responsibility and Budget Management Act aimed to strengthen fiscal discipline.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(260)
    description3.setLeft(250)
    description3.setWidth(380)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  
    
  }






  // Slide 20
function createNinteenSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    // const slide = presentation.appendSlide();
    const title2 = slide.insertTextBox('Indian History')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const dotLine = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 280)
    dotLine.setDashStyle(SlidesApp.DashStyle.DASH)
    dotLine.setTop(80)
    dotLine.setLeft(50)
  
  
    const line1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 40, 2.5)
    line1.setTop(110)
    line1.setLeft(50)
    line1.getLineFill().setSolidFill('#3339FF')
  
    const line2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 40, 2.5)
    line2.setLeft(50)
    line2.setTop(190)
    line2.getLineFill().setSolidFill('#33ACFF')
  
    const line3 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 40, 2.5)
    line3.setTop(260)
    line3.setLeft(50)
    line3.getLineFill().setSolidFill('#F9FF33')
  
    const line4 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 40, 2.5)
    line4.setLeft(50)
    line4.setTop(330)
    line4.getLineFill().setSolidFill('#FF6133')
  
  
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(6)
    shape5.setHeight(6)
    shape5.setTop(107)
    shape5.setLeft(47)
    shape5.getBorder().getLineFill().setSolidFill('#3339FF')
    shape5.getFill().setSolidFill('#3339FF')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(6)
    shape6.setHeight(6)
    shape6.setTop(187)
    shape6.setLeft(47)
    shape6.getBorder().getLineFill().setSolidFill('#33ACFF')
    shape6.getFill().setSolidFill('#33ACFF')
  
    const shape7 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape7.setWidth(6)
    shape7.setHeight(6)
    shape7.setTop(257)
    shape7.setLeft(47)
    shape7.getBorder().getLineFill().setSolidFill('#F9FF33')
    shape7.getFill().setSolidFill('#F9FF33')
  
    const shape8 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape8.setWidth(6)
    shape8.setHeight(6)
    shape8.setTop(327)
    shape8.setLeft(47)
    shape8.getBorder().getLineFill().setSolidFill('#FF6133')
    shape8.getFill().setSolidFill('#2E8BC0') 
  
    const subtitle = slide.insertTextBox('1990BC')
    const subStyle = subtitle.getText().getTextStyle()
    subtitle.setTop(90)
    subtitle.setLeft(110)
    subtitle.setWidth(250)
    subStyle.setForegroundColor('#000000')
    subStyle.setFontSize(14)
    subStyle.setFontFamily('Lato')
    subStyle.setBold(true)
  
    const subtitle2 = slide.insertTextBox('Indus Valley Civilization')
    const subStyle2 = subtitle2.getText().getTextStyle()
    subtitle2.setTop(160)
    subtitle2.setLeft(110)
    subtitle2.setWidth(100)
    subStyle2.setForegroundColor('#000000')
    subStyle2.setFontSize(14)
    subStyle2.setFontFamily('Lato')
    subStyle2.setBold(true)
  
    const subtitle3 = slide.insertTextBox('Economic Activities')
    const subStyle3 = subtitle3.getText().getTextStyle()
    subtitle3.setTop(240)
    subtitle3.setLeft(110)
    subtitle3.setWidth(100)
    subStyle3.setForegroundColor('#000000')
    subStyle3.setFontSize(14)
    subStyle3.setFontFamily('Lato')
    subStyle3.setBold(true)
  
    const subtitle4 = slide.insertTextBox('Cultural Significance')
    const subStyle4 = subtitle4.getText().getTextStyle()
    subtitle4.setTop(310)
    subtitle4.setLeft(110)
    subtitle4.setWidth(100)
    subStyle4.setForegroundColor('#000000')
    subStyle4.setFontSize(14)
    subStyle4.setFontFamily('Lato')
    subStyle4.setBold(true)
  
    const description = slide.insertTextBox('In 1990BC, the Indus Valley Civilization flourished. Cities like Mohenjo-Daro and Harappa thrived, showcasing advanced urban planning and sophisticated drainage systems.')
    const descStyle = description.getText().getTextStyle()
    description.setTop(90)
    description.setLeft(230)
    description.setWidth(380)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const description2 = slide.insertTextBox("The Indus Valley Civilization was one of the world's oldest urban civilizations, with a remarkable level of urbanization and technological advancements for its time.")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(160)
    description2.setLeft(230)
    description2.setWidth(380)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const description3 = slide.insertTextBox("The economy of the Indus Valley Civilization was based on agriculture, trade, and craftsmanship. They traded with regions like Mesopotamia for goods such as precious stones and metals.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(240)
    description3.setLeft(230)
    description3.setWidth(380)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  
    const description4 = slide.insertTextBox("The period of 1990BC marked a significant cultural era in Indian history, with advancements in art, pottery, and script. The civilization had a unique script that is yet to be fully deciphered.")
    const descStyle4 = description4.getText().getTextStyle()
    description4.setTop(310)
    description4.setLeft(230)
    description4.setWidth(380)
    descStyle4.setForegroundColor('#000000')
    descStyle4.setFontSize(11)
    descStyle4.setFontFamily('Lato')
  
  }






  //Slide 1
function createTwentySlide(presentation, index) {
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






  // Slide 10
function createTwentyOneSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    // const slide = presentation.appendSlide();
    const title2 = slide.insertTextBox('Indian History')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const image = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image.setTop(105)
    image.setLeft(60)
    image.setWidth(30)
    image.setHeight(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setTop(190)
    image2.setLeft(60)
    image2.setWidth(30)
    image2.setHeight(30)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setTop(280)
    image3.setLeft(60)
    image3.setWidth(30)
    image3.setHeight(30)
  
    // create list
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(10)
    shape1.setHeight(10)
    shape1.setTop(115)
    shape1.setLeft(130)
    shape1.getBorder().getLineFill().setSolidFill('#0000FF')
    shape1.getFill().setSolidFill('#0000FF')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(10)
    shape2.setHeight(10)
    shape2.setTop(205)
    shape2.setLeft(130)
    shape2.getBorder().getLineFill().setSolidFill('#7d7bec')
    shape2.getFill().setSolidFill('#7d7bec')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(10)
    shape3.setHeight(10)
    shape3.setTop(290)
    shape3.setLeft(130)
    shape3.getBorder().getLineFill().setSolidFill('#FFFF00')
    shape3.getFill().setSolidFill('#FFFF00')
  
    const description = slide.insertTextBox("Kargil War between India and Pakistan took place.")
    const descStyle = description.getText().getTextStyle()
    description.setTop(105)
    description.setLeft(170)
    description.setWidth(450)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const description2 = slide.insertTextBox("India's population crossed the 1 billion mark in 1999.")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(190)
    description2.setLeft(170)
    description2.setWidth(450)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const description3 = slide.insertTextBox("National Democratic Alliance (NDA) government came into power with Atal Bihari Vajpayee as Prime Minister.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(275)
    description3.setLeft(170)
    description3.setWidth(450)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  
    
  }






  //Slide 4
function createTwentyTwoSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    // const slide = presentation.appendSlide();
    const title2 = slide.insertTextBox('Indian History')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const image = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image.setTop(105)
    image.setLeft(60)
    image.setWidth(30)
    image.setHeight(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setTop(190)
    image2.setLeft(60)
    image2.setWidth(30)
    image2.setHeight(30)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setTop(280)
    image3.setLeft(60)
    image3.setWidth(30)
    image3.setHeight(30)
  
    // create list
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(10)
    shape1.setHeight(10)
    shape1.setTop(115)
    shape1.setLeft(115)
    shape1.getBorder().getLineFill().setSolidFill('#0000FF')
    shape1.getFill().setSolidFill('#0000FF')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(10)
    shape2.setHeight(10)
    shape2.setTop(205)
    shape2.setLeft(115)
    shape2.getBorder().getLineFill().setSolidFill('#7d7bec')
    shape2.getFill().setSolidFill('#7d7bec')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(10)
    shape3.setHeight(10)
    shape3.setTop(290)
    shape3.setLeft(115)
    shape3.getBorder().getLineFill().setSolidFill('#FFFF00')
    shape3.getFill().setSolidFill('#FFFF00')
  
    const subtitle = slide.insertTextBox('Key Events')
    const subStyle = subtitle.getText().getTextStyle()
    subtitle.setTop(100)
    subtitle.setLeft(150)
    subtitle.setWidth(100)
    subStyle.setForegroundColor('#000000')
    subStyle.setFontSize(14)
    subStyle.setFontFamily('Lato')
    subStyle.setBold(true)
  
    const subtitle2 = slide.insertTextBox('Cultural Milestones')
    const subStyle2 = subtitle2.getText().getTextStyle()
    subtitle2.setTop(190)
    subtitle2.setLeft(150)
    subtitle2.setWidth(100)
    subStyle2.setForegroundColor('#000000')
    subStyle2.setFontSize(14)
    subStyle2.setFontFamily('Lato')
    subStyle2.setBold(true)
  
    const subtitle3 = slide.insertTextBox('Economic Developments')
    const subStyle3 = subtitle3.getText().getTextStyle()
    subtitle3.setTop(270)
    subtitle3.setLeft(150)
    subtitle3.setWidth(115)
    subStyle3.setForegroundColor('#000000')
    subStyle3.setFontSize(14)
    subStyle3.setFontFamily('Lato')
    subStyle3.setBold(true)
  
  
    const description = slide.insertTextBox("In 1999, India saw significant advancements in technology, with the launch of the Indian Space Research Organisation's first indigenously developed satellite, IRS-1C. The Kargil War between India and Pakistan also took place during this year.")
    const descStyle = description.getText().getTextStyle()
    description.setTop(90)
    description.setLeft(260)
    description.setWidth(350)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const description2 = slide.insertTextBox("The National Gallery of Modern Art in Mumbai was inaugurated, showcasing contemporary Indian art. Bollywood movies like 'Hum Dil De Chuke Sanam' and 'Taal' were popular.")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(180)
    description2.setLeft(260)
    description2.setWidth(350)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const description3 = slide.insertTextBox("The Indian economy in 1999 experienced growth in sectors like IT and telecommunications, laying the foundation for future development. The introduction of the Fiscal Responsibility and Budget Management Act aimed to strengthen fiscal discipline.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(260)
    description3.setLeft(260)
    description3.setWidth(350)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  
      }






  // Slide 14
function createTwentyThreeSlide(presentation, index) {
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
    image1.setLeft(50)
    image1.setTop(110)
    image1.setHeight(30)
    image1.setWidth(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(255)
    image2.setTop(110)
    image2.setHeight(30)
    image2.setWidth(30)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(460)
    image3.setTop(110)
    image3.setHeight(30)
    image3.setWidth(30)
  
    const info1 = slide.insertTextBox('Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(160)
    info1.setLeft(45)
    info1.setWidth(180)
  
    const info2 = slide.insertTextBox('Use of bronze tools, advanced urban planning, and sophisticated pottery techniques characterize the period.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(160)
    info2.setLeft(250)
    info2.setWidth(180)
  
    const info3 = slide.insertTextBox('Social hierarchy with priests and rulers at the top, skilled artisans and traders, and farmers forming the majority of the population.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(160)
    info3.setLeft(455)
    info3.setWidth(180)
  
  }





function createTwentyFourSlide(presentation, index) {
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
  
  
   const shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape1.getBorder().setTransparent();
    shape1.setWidth(40)
    shape1.setHeight(40)
    shape1.setTop(100)
    shape1.setLeft(30)
    shape1.getFill().setSolidFill('#ffffff')
  
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape2.getBorder().setTransparent();
    shape2.setWidth(200)
    shape2.setHeight(120)
    shape2.setTop(100)
    shape2.setLeft(250)
    shape2.getFill().setSolidFill('#ffffff')
  
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
    shape3.getBorder().setTransparent();
    shape3.setWidth(200)
    shape3.setHeight(120)
    shape3.setTop(100)
    shape3.setLeft(480)
    shape3.getFill().setSolidFill('#ffffff')
  
  
    const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image1.setLeft(50) // Adjusted left position
    image1.setTop(110)
    image1.setHeight(20)
    image1.setWidth(20)
  
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(260) // Adjusted left position
    image2.setTop(110)
    image2.setHeight(20)
    image2.setWidth(20)
  
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(490) // Adjusted left position
    image3.setTop(110)
    image3.setHeight(20)
    image3.setWidth(20)
  
  
    const info1 = slide.insertTextBox('Kargil War between India and Pakistan took place. ')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    const info1Range = info1.getText();
    const info1paragraphStyle = info1Range.getParagraphStyle();
    // info1paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info1.setTop(140)
    info1.setLeft(50)
    info1.setWidth(180)
  
  
    const info2 = slide.insertTextBox('Indian Parliament attacked by terrorists leading to Operation Vijay.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    const info2Range = info2.getText();
    const info2paragraphStyle = info2Range.getParagraphStyle();
    // info2paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info2.setTop(140)
    info2.setLeft(255)
    info2.setWidth(180)
  
  
    const info3 = slide.insertTextBox("India's population reached approximately 1 billion people in 1999.")
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    const info3Range = info3.getText();
    const info3paragraphStyle = info3Range.getParagraphStyle();
    // info3paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    info3.setTop(140)
    info3.setLeft(485)
    info3.setWidth(180)
  }

  // Slide 9
function createTwentyFiveSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    // const slide = presentation.appendSlide();
    const title2 = slide.insertTextBox('Indian History')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const image = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image.setTop(100)
    image.setLeft(60)
    image.setWidth(20)
    image.setHeight(20)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setTop(190)
    image2.setLeft(60)
    image2.setWidth(20)
    image2.setHeight(20)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setTop(270)
    image3.setLeft(60)
    image3.setWidth(20)
    image3.setHeight(20)
  
    const description = slide.insertTextBox("In 1999, India saw significant advancements in technology, with the launch of the Indian Space Research Organisation's first indigenously developed satellite, IRS-1C. The Kargil War between India and Pakistan also took place during this year.")
    const descStyle = description.getText().getTextStyle()
    description.setTop(90)
    description.setLeft(100)
    description.setWidth(550)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const description2 = slide.insertTextBox("The National Gallery of Modern Art in Mumbai was inaugurated, showcasing contemporary Indian art. Bollywood movies like 'Hum Dil De Chuke Sanam' and 'Taal' were popular.")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(180)
    description2.setLeft(100)
    description2.setWidth(550)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const description3 = slide.insertTextBox("The Indian economy in 1999 experienced growth in sectors like IT and telecommunications, laying the foundation for future development. The introduction of the Fiscal Responsibility and Budget Management Act aimed to strengthen fiscal discipline.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(260)
    description3.setLeft(100)
    description3.setWidth(550)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  
    
  }

  //Slide 6
function createTwentySixSlide(presentation, index) {
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
    image1.setLeft(50)
    image1.setTop(110)
    image1.setHeight(30)
    image1.setWidth(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setLeft(255)
    image2.setTop(110)
    image2.setHeight(30)
    image2.setWidth(30)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setLeft(460)
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
    subtitle2.setLeft(250)
    subtitle2.setWidth(150)
  
    const subtitle3 = slide.insertTextBox('Society')
    const subtitle3Style = subtitle3.getText().getTextStyle()
    subtitle3Style.setFontSize(14)
    subtitle3Style.setFontFamily('Lato')
    subtitle3Style.setForegroundColor('#0000FF')
    subtitle3Style.setBold(true)
    subtitle3.setTop(150)
    subtitle3.setLeft(455)
    subtitle3.setWidth(150)
  
    const info1 = slide.insertTextBox('Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks')
    const info1Style = info1.getText().getTextStyle()
    info1Style.setFontSize(11)
    info1Style.setFontFamily('Lato')
    info1Style.setForegroundColor('#000000')
    info1.setTop(200)
    info1.setLeft(45)
    info1.setWidth(200)
  
    const info2 = slide.insertTextBox('Use of bronze tools, advanced urban planning, and sophisticated pottery techniques characterize the period.')
    const info2Style = info2.getText().getTextStyle()
    info2Style.setFontSize(11)
    info2Style.setFontFamily('Lato')
    info2Style.setForegroundColor('#000000')
    info2.setTop(200)
    info2.setLeft(250)
    info2.setWidth(200)
  
    const info3 = slide.insertTextBox('Social hierarchy with priests and rulers at the top, skilled artisans and traders, and farmers forming the majority of the population.')
    const info3Style = info3.getText().getTextStyle()
    info3Style.setFontSize(11)
    info3Style.setFontFamily('Lato')
    info3Style.setForegroundColor('#000000')
    info3.setTop(200)
    info3.setLeft(455)
    info3.setWidth(200)
  
  }

  //Slide 3
function createTwentySevenSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    // const slide = presentation.appendSlide();
    const title2 = slide.insertTextBox('Indian History of 2023')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const image = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image.setTop(110)
    image.setLeft(60)
    image.setWidth(30)
    image.setHeight(30)
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setTop(190)
    image2.setLeft(60)
    image2.setWidth(30)
    image2.setHeight(30)
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setTop(280)
    image3.setLeft(60)
    image3.setWidth(30)
    image3.setHeight(30)
  
    const subtitle = slide.insertTextBox('History of 1999')
    const subStyle = subtitle.getText().getTextStyle()
    subtitle.setTop(110)
    subtitle.setLeft(110)
    subtitle.setWidth(250)
    subStyle.setForegroundColor('#0000FF')
    subStyle.setFontSize(14)
    subStyle.setFontFamily('Lato')
    subStyle.setBold(true)
  
    const subtitle2 = slide.insertTextBox('Cultural Events')
    const subStyle2 = subtitle2.getText().getTextStyle()
    subtitle2.setTop(190)
    subtitle2.setLeft(110)
    subtitle2.setWidth(120)
    subStyle2.setForegroundColor('#0000FF')
    subStyle2.setFontSize(14)
    subStyle2.setFontFamily('Lato')
    subStyle2.setBold(true)
  
    const subtitle3 = slide.insertTextBox('Economic Milestones')
    const subStyle3 = subtitle3.getText().getTextStyle()
    subtitle3.setTop(270)
    subtitle3.setLeft(110)
    subtitle3.setWidth(100)
    subStyle3.setForegroundColor('#0000FF')
    subStyle3.setFontSize(14)
    subStyle3.setFontFamily('Lato')
    subStyle3.setBold(true)
  
  
    const description = slide.insertTextBox("In 1999, India saw significant advancements in technology, with the launch of the Indian Space Research Organisation's first indigenously developed satellite, IRS-1C. The Kargil War between India and Pakistan also took place during this year.")
    const descStyle = description.getText().getTextStyle()
    description.setTop(90)
    description.setLeft(250)
    description.setWidth(380)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const description2 = slide.insertTextBox("1999 marked the release of the iconic Bollywood movie 'Hum Dil De Chuke Sanam' and the establishment of the National Museum of Indian Cinema in Mumbai.")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(180)
    description2.setLeft(250)
    description2.setWidth(380)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const description3 = slide.insertTextBox("The Indian economy in 1999 experienced growth in sectors like IT and telecommunications, laying the foundation for future development. The introduction of the Fiscal Responsibility and Budget Management Act aimed to strengthen fiscal discipline.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(260)
    description3.setLeft(250)
    description3.setWidth(380)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  
    
  }

function createTwentyEightSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title2 = slide.insertTextBox('Indian History')
    const titleStyle2 = title2.getText().getTextStyle()
    titleStyle2.setBold(true)
    titleStyle2.setForegroundColor('#000000')
    titleStyle2.setFontSize(24)
    titleStyle2.setFontFamily('Lato')
    title2.setTop(30)
    title2.setLeft(45)
    title2.setWidth(650)
  
    const image = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image.setTop(100)
    image.setLeft(60)
    image.setWidth(20)
    image.setHeight(20)
  
    const description = slide.insertTextBox('Kargil War between India and Pakistan took place, leading to significant military conflict in the region.')
    const descStyle = description.getText().getTextStyle()
    description.setTop(90)
    description.setLeft(120) // Adjusted Left position
    description.setWidth(380)
    descStyle.setForegroundColor('#000000')
    descStyle.setFontSize(11)
    descStyle.setFontFamily('Lato')
  
    const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image2.setTop(170)
    image2.setLeft(60)
    image2.setWidth(20)
    image2.setHeight(20)
  
    const description2 = slide.insertTextBox("Atal Bihari Vajpayee served as the Prime Minister of India during this period, implementing various economic and political reforms")
    const descStyle2 = description2.getText().getTextStyle()
    description2.setTop(160)
    description2.setLeft(120) // Adjusted Left position
    description2.setWidth(380)
    descStyle2.setForegroundColor('#000000')
    descStyle2.setFontSize(11)
    descStyle2.setFontFamily('Lato')
  
    const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
    image3.setTop(250)
    image3.setLeft(60)
    image3.setWidth(20)
    image3.setHeight(20)
  
    const description3 = slide.insertTextBox("India's population reached approximately 1 billion people in 1999, marking a significant demographic milestone for the country.")
    const descStyle3 = description3.getText().getTextStyle()
    description3.setTop(240)
    description3.setLeft(120) // Adjusted Left position
    description3.setWidth(380)
    descStyle3.setForegroundColor('#000000')
    descStyle3.setFontSize(11)
    descStyle3.setFontFamily('Lato')
  }

// Run the script to create the combined presentation
createCombinedPresentation();
