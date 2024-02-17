function createPresentationWithBulletPoints() {
  // Create a new presentation
  var presentation = SlidesApp.create('New Presentation');


  // Append a slide with predefined layout (Title and Body)
  var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);


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