function createPresentationWithBulletPoints() {
  var presentation = SlidesApp.create('New Presentation');
  var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);

  var titleShape = slide.getShapes()[0];
  var bodyShape = slide.getShapes()[1];

  // Set the title text and make it bold
  titleShape.getText().setText('Indian History').getTextStyle().setBold(true);

  var historyText = 'Indus Valley Civilization flourished in the Indian subcontinent around 1990 BC, known for advanced urban planning and trade.';
  var historyText1 = 'Ancient Indian scriptures like the Rigveda were composed during this period, showcasing early Vedic culture and beliefs.';
  var historyText2 = 'In 1990 BC, the Harappan civilization was at its peak, with well-planned cities and sophisticated drainage systems.';
  var historyText3 = 'The period around 1990 BC marked significant advancements in metallurgy, pottery, and art in ancient India.';

  // Define the initial top position and increased spacing after each sentence
  var initialTopPosition = 150;
  var spacingAfterSentence = 80;

  // Create separate text boxes for each bullet point with increased spacing
  var textBox1 = slide.insertTextBox('  ' + historyText, 100, initialTopPosition, 500, 50);
  var textBox2 = slide.insertTextBox('  ' + historyText1, 100, initialTopPosition + spacingAfterSentence, 500, 50);
  var textBox3 = slide.insertTextBox('  ' + historyText2, 100, initialTopPosition + 2 * spacingAfterSentence, 500, 50);
  var textBox4 = slide.insertTextBox('  ' + historyText3, 100, initialTopPosition + 3 * spacingAfterSentence, 500, 50);

  // Define colors for the colored circles
  var circleColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

  // Add colored circles before each sentence
  [textBox1, textBox2, textBox3, textBox4].forEach(function (textBox, index) {
    var circle = slide.insertShape(SlidesApp.ShapeType.ELLIPSE, textBox.getLeft() - 30, textBox.getTop() + 15, 10, 10);
    circle.getBorder().setTransparent();
    circle.getFill().setSolidFill(circleColors[index]);
  });

  // Add image icons to each text box
  var iconUrl = 'https://img.icons8.com/?size=32&id=77258&format=png'; // Replace with the actual URL of your image
  [textBox1, textBox2, textBox3, textBox4].forEach(function (textBox) {
    var image = slide.insertImage(iconUrl, textBox.getLeft() - 20, textBox.getTop() + 15, 12, 12);
  });

  // Save and close the presentation
  presentation.saveAndClose();
}

// Run the function
createPresentationWithBulletPoints();