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
    createTwentyNineSlide(presentation, 16);
    createThirtySlide(presentation, 17);
    createThirtyOneSlide(presentation, 18);
    createThirtyTwoSlide(presentation, 19);

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

  //Pros and Cons first title
// then Pros and Cons
//then Pros point is denoded as a 'right sign'
// and Cons points are denoted as a 'cross sign'

function createTwentyNineSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
      
    const slide1 = presentation.appendSlide(); 
    const title = slide1.insertTextBox('India History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setBold(true)
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('League Spartan')
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(600)
  
  
    const sub1 = slide1.insertTextBox('Pros')
    const sub1Style = sub1.getText().getTextStyle()
    sub1Style.setBold(true)
    sub1Style.setFontFamily('League Spartan')
    sub1Style.setFontSize(18)
    sub1Style.setForegroundColor('#0000FF')
    sub1.setTop(110)
    sub1.setLeft(40)
    sub1.setWidth(100)
  
    const sub2 = slide1.insertTextBox('Cons')
    const sub2Style = sub2.getText().getTextStyle()
    sub2Style.setBold(true)
    sub2Style.setFontFamily('League Spartan')
    sub2Style.setFontSize(18)
    sub2Style.setForegroundColor('#D0312D')
    sub2.setTop(110)
    sub2.setLeft(360)
    sub2.setWidth(100)
   
    const rightSymbol = '\u2714'
    const textBox = slide1.insertTextBox(rightSymbol);
    const textRange = textBox.getText().getTextStyle();
    textRange.setBold(true)
    textRange.setFontSize(14)
    textBox.setTop(150)
    textBox.setLeft(40)
    textRange.setForegroundColor('#0000FF')
  
    
    const textBox1 = slide1.insertTextBox(rightSymbol);
    const textRange1 = textBox1.getText().getTextStyle();
    textRange1.setBold(true)
    textRange1.setFontSize(14)
    textBox1.setTop(220)
    textBox1.setLeft(40)
    textRange1.setForegroundColor('#0000FF')
  
    const crossSymbol = '\u2718'
    const textBox2 = slide1.insertTextBox(crossSymbol);
    const textRange2 = textBox2.getText().getTextStyle();
    textRange2.setBold(true)
    textRange2.setFontSize(14)
    textBox2.setTop(150)
    textBox2.setLeft(360)
    textRange2.setForegroundColor('#D0312D')
  
    const textBox3 = slide1.insertTextBox(crossSymbol);
    const textRange3 = textBox3.getText().getTextStyle();
    textRange3.setBold(true)
    textRange3.setFontSize(14)
    textBox3.setTop(220)
    textBox3.setLeft(360)
    textRange3.setForegroundColor('#D0312D')
  
    const info11 = slide1.insertTextBox(" Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.", 70,150,280,10)
  
    const info11Style = info11.getText().getTextStyle()
    info11Style.setFontFamily('League Spartan')
    info11Style.setFontSize(14)
    
    const info12 = slide1.insertTextBox("Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.", 70,220,280,10)
  
    const info12Style = info12.getText().getTextStyle()
    info12Style.setFontFamily('League Spartan')
    info12Style.setFontSize(14)
  
    const info21 = slide1.insertTextBox('Challenges in border security due to ongoing territorial disputes with neighboring countries.' , 390, 150,280, 10 )
  
    const info21Style = info21.getText().getTextStyle()
    info21Style.setFontFamily('League Spartan')
    info21Style.setFontSize(14)
  
    const info22= slide1.insertTextBox('Challenges in border security due to ongoing territorial disputes with neighboring countries.' , 390, 220,280, 10 )
    
    const info22Style = info22.getText().getTextStyle()
    info22Style.setFontFamily('League Spartan')
    info22Style.setFontSize(14)
    
}
  

//Pros and Cons are containing inside the two boxes
// and only boxes border is colorfull inside is hollow



function createThirtySlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('India History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setBold(true)
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('League Spartan')
    title.setTop(10)
    title.setLeft(40)
    title.setWidth(600)
    
    var shape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 80, 300, 270); // x, y, width, height
    shape.getBorder().getLineFill().setSolidFill('#0000FF'); // Set the border color to red
    shape.getFill().setSolidFill('#FFFFFF');
  
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(3)
    shape1.setHeight(3)
    shape1.setTop(155)
    shape1.setLeft(80)
    shape1.getBorder().getLineFill().setSolidFill('#0000FF')
    shape1.getFill().setSolidFill('#0000FF')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(3)
    shape2.setHeight(3)
    shape2.setTop(195)
    shape2.setLeft(80)
    shape2.getBorder().getLineFill().setSolidFill('#0000FF')
    shape2.getFill().setSolidFill('#0000FF')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(3)
    shape3.setHeight(3)
    shape3.setTop(240)
    shape3.setLeft(80)
    shape3.getBorder().getLineFill().setSolidFill('#0000FF')
    shape3.getFill().setSolidFill('#0000FF')
  
    
  
    var shape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 380, 80, 300, 270); // x, y, width, height
    shape.getBorder().getLineFill().setSolidFill('#0000FF'); // Set the border color to red
    shape.getFill().setSolidFill('#FFFFFF');
  
    const sub1 = slide.insertTextBox('Pros')
    const sub1Style = sub1.getText().getTextStyle()
    sub1Style.setBold(true)
    sub1Style.setFontFamily('League Spartan')
    sub1Style.setFontSize(18)
    sub1Style.setForegroundColor('#0000FF')
    sub1.setTop(100)
    sub1.setLeft(70)
    sub1.setWidth(100)
  
    const shape4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape4.setWidth(3)
    shape4.setHeight(3)
    shape4.setTop(155)
    shape4.setLeft(410)
    shape4.getBorder().getLineFill().setSolidFill('#D0312D')
    shape4.getFill().setSolidFill('#D0312D')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(3)
    shape5.setHeight(3)
    shape5.setTop(195)
    shape5.setLeft(410)
    shape5.getBorder().getLineFill().setSolidFill('#D0312D')
    shape5.getFill().setSolidFill('#D0312D')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(3)
    shape6.setHeight(3)
    shape6.setTop(240)
    shape6.setLeft(410)
    shape6.getBorder().getLineFill().setSolidFill('#D0312D')
    shape6.getFill().setSolidFill('#D0312D')
  
  
    const sub2 = slide.insertTextBox('Cons')
    const sub2Style = sub2.getText().getTextStyle()
    sub2Style.setBold(true)
    sub2Style.setFontFamily('League Spartan')
    sub2Style.setFontSize(18)
    sub2Style.setForegroundColor('#D0312D')
    sub2.setTop(100)
    sub2.setLeft(400)
    sub2.setWidth(100)
  
    const info11 = slide.insertTextBox('Stong leagacy and rich cultural heritage dating back centuries', 90,140,250,10 )
    const info11Style = info11.getText().getTextStyle()
    
    info11Style.setFontFamily('League Spartan')
    info11Style.setFontSize(12)
    info11Style.setBold(true)
    
  
    const info12 = slide.insertTextBox('Significant contribution to world history and civilization',90,180,250,10 )
    const info12Style = info12.getText().getTextStyle()
  
    info12Style.setFontFamily('League Spartan')
    info12Style.setFontSize(12)
    info12Style.setBold(true)
  
    const info13 = slide.insertTextBox('Diverse and colorful tapestry of traditions, langauges and customs',90,220,250,10 )
    const info13Style = info13.getText().getTextStyle()
  
    info13Style.setFontFamily('League Spartan')
    info13Style.setFontSize(12)
    info13Style.setBold(true)
  
    const info21 = slide.insertTextBox('Challenges in modernization and technological advancement',430,140,250,10)
    const info21Style = info21.getText().getTextStyle()
  
    info21Style.setFontFamily('League Spartan')
    info21Style.setFontSize(12)
    info21Style.setBold(true)
  
    const info22= slide.insertTextBox('Historical conflicts and territorial disputes',430,180,250,10)
    const info22Style = info22.getText().getTextStyle()
  
    info22Style.setFontFamily('League Spartan')
    info22Style.setFontSize(12)
    info22Style.setBold(true)
  
    const info23= slide.insertTextBox('Complex socila and political landscape',430,225,250,10)
    const info23Style = info23.getText().getTextStyle()
  
    info23Style.setFontFamily('League Spartan')
    info23Style.setFontSize(12)
    info23Style.setBold(true)
  
  
  
  
    
  }
  

  // Here plus sign indicates Pros
// and cross sign indicates cons
// below this sign there is straight line

function createThirtyOneSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('India History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setBold(true)
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('League Spartan')
    title.setTop(40)
    title.setLeft(40)
    title.setWidth(600)
  
  
    const line1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 18, 2.5);
    line1.setWeight(4)
    line1.setTop(123)
    line1.setLeft(41)
    
    const line2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 18);
    line2.setWeight(4)
    line2.setTop(115)
    line2.setLeft(50)
    
  
  
  
  
    const pros = slide.insertTextBox('Pros')
    const prosStyle = pros.getText().getTextStyle()
    prosStyle.setBold(true)
    prosStyle.setFontSize(18)
    prosStyle.setFontFamily('League Spartan')
    pros.setTop(108)
    pros.setLeft(80)
    pros.setWidth(600)
  
    
  
    const line3 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 300, 2.5);
    line3.setWeight(3)
    line3.setTop(150)
    line3.setLeft(30)
  
    const line4 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 300, 2.5);
    line4.setWeight(3)
    line4.setTop(150)
    line4.setLeft(380)
  
    const cons = slide.insertTextBox('Cons')
    const consStyle = cons.getText().getTextStyle()
    consStyle.setBold(true)
    consStyle.setFontSize(18)
    consStyle.setFontFamily('League Spartan')
    cons.setTop(108)
    cons.setLeft(420)
    cons.setWidth(600)
    
  
   var listItems = [
      {text: "The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities", textColor: "#000000"}, // Black text
      {text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000"}, // Black text
      {text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000"}  // Black text
    ];
  
    var x = 60;
    var y = 170;
    var textBoxWidth = 300;
    var textBoxHeight = 50;
    var lineHeight = 50;
  
    // Add items to the slide as text boxes
    listItems.forEach(function(item, index) {
      var textBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x, y + index * lineHeight, textBoxWidth, textBoxHeight);
      textBox.getText().setText(item.text).getTextStyle().setFontSize(11); // Set text and font size
      // textBox.getText().getParagraphStyle().setAlignment(SlidesApp.ParagraphAlignment.START); // Set paragraph alignment to left
      textBox.getText().getTextStyle().setForegroundColor(item.textColor); // Set color for the text
      textBox.getBorder().setTransparent(); // Make border transparent
      textBox.getFill().setSolidFill('#ffffff'); // Make background color of the text box same as slide background color
    });
  
  
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(4)
    shape1.setHeight(4)
    shape1.setTop(183)
    shape1.setLeft(40)
    shape1.getBorder().getLineFill().setSolidFill('#000000')
    shape1.getFill().setSolidFill('#000000')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(4)
    shape2.setHeight(4)
    shape2.setTop(233)
    shape2.setLeft(40)
    shape2.getBorder().getLineFill().setSolidFill('#000000')
    shape2.getFill().setSolidFill('#000000')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(4)
    shape3.setHeight(4)
    shape3.setTop(283)
    shape3.setLeft(40)
    shape3.getBorder().getLineFill().setSolidFill('#000000')
    shape3.getFill().setSolidFill('#000000')
  
  
  
    var listItems1 = [
      {text: "The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities", textColor: "#000000"}, // Black text
      {text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000"}, // Black text
      {text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000"}  // Black text
    ];
  
    var x1 = 400;
    var y1 = 170;
    var textBoxWidth1 = 300;
    var textBoxHeight1 = 50;
    var lineHeight1 = 50;
  
    // Add items to the slide as text boxes
    listItems1.forEach(function(item, index) {
      var textBox1 = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x1, y1 + index * lineHeight1, textBoxWidth1, textBoxHeight1);
      textBox1.getText().setText(item.text).getTextStyle().setFontSize(11); // Set text and font size
      // textBox.getText().getParagraphStyle().setAlignment(SlidesApp.ParagraphAlignment.START); // Set paragraph alignment to left
      textBox1.getText().getTextStyle().setForegroundColor(item.textColor); // Set color for the text
      textBox1.getBorder().setTransparent(); // Make border transparent
      textBox1.getFill().setSolidFill('#ffffff'); // Make background color of the text box same as slide background color
    });
  
  
    const shape4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape4.setWidth(4)
    shape4.setHeight(4)
    shape4.setTop(183)
    shape4.setLeft(380)
    shape4.getBorder().getLineFill().setSolidFill('#000000')
    shape4.getFill().setSolidFill('#000000')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(4)
    shape5.setHeight(4)
    shape5.setTop(233)
    shape5.setLeft(380)
    shape5.getBorder().getLineFill().setSolidFill('#000000')
    shape5.getFill().setSolidFill('#000000')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(4)
    shape6.setHeight(4)
    shape6.setTop(283)
    shape6.setLeft(380)
    shape6.getBorder().getLineFill().setSolidFill('#000000')
    shape6.getFill().setSolidFill('#000000')
  
  
    const line5 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT,  2.5, 0, 2.5,18);
    line5.setWeight(4)
    line5.setRotation(120)
    line5.setTop(117)
    line5.setLeft(393)
  
    const line6 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 18);
    line6.setWeight(4)
    line6.setRotation(40)
    line6.setTop(117)
    line6.setLeft(393)
  
  
    
  }
  

  // Here pros indicates as A inclined Up Arrow is inside circle
// and cons indicates as ainclined down arrows is inside circle

function createThirtyTwoSlide(presentation, index) {
    const slide = presentation.insertSlide(index + 1);
  
    // Clear existing shapes
    slide.getShapes().forEach(function (shape) {
      shape.remove();
    });
  
    const title = slide.insertTextBox('India History')
    const titleStyle = title.getText().getTextStyle()
    titleStyle.setBold(true)
    titleStyle.setFontSize(24)
    titleStyle.setFontFamily('League Spartan')
    title.setTop(30)
    title.setLeft(40)
    title.setWidth(600)
  
    // Set initial position and dimensions for the circle
    var circleX = 140;
    var circleY = 100;
    var circleRadius = 20;
  
    // Draw the circle
    var circle = slide.insertShape(SlidesApp.ShapeType.ELLIPSE, circleX, circleY, circleRadius * 2, circleRadius * 2);
    circle.getFill().setSolidFill("#ffffff")
    circle.getBorder().getLineFill().setSolidFill('#0000FF')
    
    // var innerCircle = slide.insertShape(SlidesApp.ShapeType.ELLIPSE, circleX, circleY, circleRadius * 2, circleRadius * 2);
  
  
    var circleX1 = 500;
    var circleY1 = 100;
    var circleRadius1 = 20;
  
    const circle1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE, circleX1, circleY1, circleRadius1 * 2, circleRadius1 * 2)
    circle1.getFill().setSolidFill("#ffffff")
    circle1.getBorder().getLineFill().setSolidFill("#D0312D")
  
  
  
    const pros = slide.insertTextBox('Pros')
    const prosStyle= pros.getText().getTextStyle()
    prosStyle.setFontSize(18)
    prosStyle.setForegroundColor('#0000FF')
    prosStyle.setBold(true)
    prosStyle.setFontFamily('League Spartan')
    pros.setTop(145)
    pros.setLeft(135)
  
    const cons = slide.insertTextBox('Cons')
    const consStyle=cons.getText().getTextStyle()
    consStyle.setFontSize(18)
    consStyle.setForegroundColor('#D0312D')
    consStyle.setBold(true)
    consStyle.setFontFamily('League Spartan')
    cons.setTop(145)
    cons.setLeft(495)
  
    var listItems = [
      {text: "The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities", textColor: "#000000"}, // Black text
      {text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000"}, // Black text
      {text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000"}  // Black text
    ];
  
    var x = 60;
    var y = 200;
    var textBoxWidth = 300;
    var textBoxHeight = 50;
    var lineHeight = 50;
  
    // Add items to the slide as text boxes
    listItems.forEach(function(item, index) {
      var textBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x, y + index * lineHeight, textBoxWidth, textBoxHeight);
      textBox.getText().setText(item.text).getTextStyle().setFontSize(11); // Set text and font size
      // textBox.getText().getParagraphStyle().setAlignment(SlidesApp.ParagraphAlignment.START); // Set paragraph alignment to left
      textBox.getText().getTextStyle().setForegroundColor(item.textColor); // Set color for the text
      textBox.getBorder().setTransparent(); // Make border transparent
      textBox.getFill().setSolidFill('#ffffff'); // Make background color of the text box same as slide background color
    });
  
  
    const shape1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape1.setWidth(4)
    shape1.setHeight(4)
    shape1.setTop(213)
    shape1.setLeft(40)
    shape1.getBorder().getLineFill().setSolidFill('#000000')
    shape1.getFill().setSolidFill('#000000')
  
    const shape2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape2.setWidth(4)
    shape2.setHeight(4)
    shape2.setTop(263)
    shape2.setLeft(40)
    shape2.getBorder().getLineFill().setSolidFill('#000000')
    shape2.getFill().setSolidFill('#000000')
  
    const shape3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape3.setWidth(4)
    shape3.setHeight(4)
    shape3.setTop(313)
    shape3.setLeft(40)
    shape3.getBorder().getLineFill().setSolidFill('#000000')
    shape3.getFill().setSolidFill('#000000')
  
  
  
    var listItems1 = [
      {text: "The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities", textColor: "#000000"}, // Black text
      {text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000"}, // Black text
      {text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000"}  // Black text
    ];
  
    var x1 = 400;
    var y1 = 200;
    var textBoxWidth1 = 300;
    var textBoxHeight1 = 50;
    var lineHeight1 = 50;
  
    // Add items to the slide as text boxes
    listItems1.forEach(function(item, index) {
      var textBox1 = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x1, y1 + index * lineHeight1, textBoxWidth1, textBoxHeight1);
      textBox1.getText().setText(item.text).getTextStyle().setFontSize(11); // Set text and font size
      // textBox.getText().getParagraphStyle().setAlignment(SlidesApp.ParagraphAlignment.START); // Set paragraph alignment to left
      textBox1.getText().getTextStyle().setForegroundColor(item.textColor); // Set color for the text
      textBox1.getBorder().setTransparent(); // Make border transparent
      textBox1.getFill().setSolidFill('#ffffff'); // Make background color of the text box same as slide background color
    });
  
  
    const shape4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape4.setWidth(4)
    shape4.setHeight(4)
    shape4.setTop(213)
    shape4.setLeft(380)
    shape4.getBorder().getLineFill().setSolidFill('#000000')
    shape4.getFill().setSolidFill('#000000')
  
    const shape5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape5.setWidth(4)
    shape5.setHeight(4)
    shape5.setTop(263)
    shape5.setLeft(380)
    shape5.getBorder().getLineFill().setSolidFill('#000000')
    shape5.getFill().setSolidFill('#000000')
  
    const shape6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE)
    shape6.setWidth(4)
    shape6.setHeight(4)
    shape6.setTop(313)
    shape6.setLeft(380)
    shape6.getBorder().getLineFill().setSolidFill('#000000')
    shape6.getFill().setSolidFill('#000000')
  
  
    var arrowX = 143;
    var arrowY = 95;
    var arrowWidth = 10;
    var arrowHeight = 5;
  
    // Draw the right arrow shape
    var arrow = slide.insertTextBox('↗', arrowX, arrowY, arrowWidth, arrowHeight);
    arrow.getText().getTextStyle().setForegroundColor('#0000FF')
    arrow.getText().getTextStyle().setBold(true)
    arrow.getText().getTextStyle().setFontSize(30)
    
  
  
    var arrowX1 = 500;
    var arrowY1= 90;
    var arrowWidth1 = 10;
    var arrowHeight1 = 5;
  
    // Draw the right arrow shape
    var arrow1 = slide.insertTextBox('↘', arrowX1, arrowY1, arrowWidth1, arrowHeight1);
    arrow1.getText().getTextStyle().setForegroundColor('#D0312D')
    arrow1.getText().getTextStyle().setBold(true)
    arrow1.getText().getTextStyle().setFontSize(30)
  
  }
  


// Run the script to create the combined presentation
createCombinedPresentation();
