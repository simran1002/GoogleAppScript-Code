function myFunction() {
  const presentation = SlidesApp.create("Army right image");
  const slide = presentation.appendSlide();

  const image = slide.insertImage('https://static.theprint.in/wp-content/uploads/2023/07/Army-1-1024x576.jpg?compress=true')
  image.setTop(5)
  image.setLeft(410)
  image.setWidth(305)
  image.setHeight(395)

  const title = slide.insertTextBox('India History')
  const titleStyle = title.getText().getTextStyle()
  titleStyle.setBold(true)
  titleStyle.setForegroundColor('#000000')
  titleStyle.setFontSize(24)
  titleStyle.setFontFamily('Lato')
  title.setTop(20)
  title.setLeft(30)
  title.setWidth(650)

  const subtitle = slide.insertTextBox('Indian Army')
  const subStyle = subtitle.getText().getTextStyle()
  subtitle.setTop(90)
  subtitle.setLeft(40)
  subtitle.setWidth(350)
  subStyle.setForegroundColor('#000000')
  subStyle.setFontSize(14)
  subStyle.setFontFamily('Lato')
  subStyle.setBold(true)

  var listItems = [
    { text: "The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities", textColor: "#000000" },
    { text: "In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces", textColor: "#000000" },
    { text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000" },
    { text: "The Indian Army has a rich history and traditional of valor and services to the nation", textColor: "#000000" }
  ];

  var x = 80;
  var y = 130;
  var textBoxWidth = 300;
  var textBoxHeight = 50;
  var lineHeight = 50;

  listItems.forEach(function (item, index) {
    var textBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, x, y + index * lineHeight, textBoxWidth, textBoxHeight);
    textBox.getText().setText(item.text).getTextStyle().setFontSize(11);
    textBox.getText().getTextStyle().setForegroundColor(item.textColor);
    textBox.getBorder().setTransparent();
    textBox.getFill().setSolidFill('#ffffff');
  });

  const shapeColors = ['#2E8BC0', '#2E8BC0', '#2E8BC0', '#2E8BC0'];

  for (let i = 0; i < 4; i++) {
    const shape = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
    shape.setWidth(4);
    shape.setHeight(4);
    shape.setTop(143 + i * 50);
    shape.setLeft(60);
    shape.getBorder().getLineFill().setSolidFill(shapeColors[i]);
    shape.getFill().setSolidFill(shapeColors[i]);
  }
}