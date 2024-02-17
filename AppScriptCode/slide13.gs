function createPresentationWithBulletPoints() {
  var presentation = SlidesApp.create('New Presentation');
  var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);


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