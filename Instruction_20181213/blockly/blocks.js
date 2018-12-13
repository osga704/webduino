Blockly.Blocks['cmd1'] = {
  init: function() {
  this.appendValueInput("cmd1_0")
      .setCheck("String")
      .appendField("Javascript: ");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd2'] = {
  init: function() {
  this.appendValueInput("cmd2_0")
      .setCheck("String")
      .appendField("Javascript: ");   
  this.appendDummyInput()
      .appendField("( ");      
  this.appendValueInput("cmd2_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd3'] = {
  init: function() {
  this.appendValueInput("cmd3_0")
      .setCheck("String")
      .appendField("Javascript: ");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd3_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(", ");       
  this.appendValueInput("cmd3_2")
      .setCheck(null);     
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd4'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Javascript: ");
  this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('myVar'), 'myVar');  
  this.appendDummyInput()
      .appendField(".");     
  this.appendValueInput("cmd4_0")
      .setCheck("String");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd4_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(", ");       
  this.appendValueInput("cmd4_2")
      .setCheck(null);     
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd5'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Javascript: ");
  this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('myVar'), 'myVar');  
  this.appendDummyInput()
      .appendField(".");     
  this.appendValueInput("cmd5_0")
      .setCheck("String");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd5_1")
      .setCheck(null);    
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};


Blockly.Blocks['cmd6'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["Math.E","Math.E"], 
        ["Math.LN2","Math.LN2"], 
        ["Math.LN10","Math.LN10"], 
        ["Math.LOG2E","Math.LOG2E"], 
        ["Math.LOG10E","Math.LOG10E"], 
        ["Math.PI","Math.PI"], 
        ["Math.SQRT1_2","Math.SQRT1_2"], 
        ["Math.SQRT2","Math.SQRT2"], 
        ["Math.abs","Math.abs"],
        ["Math.acos","Math.acos"],
        ["Math.acosh","Math.acosh"],
        ["Math.asin","Math.asin"],
        ["Math.asinh","Math.asinh"],
        ["Math.atan","Math.atan"],
        ["Math.atan2","Math.atan2"],
        ["Math.atanh","Math.atanh"],
        ["Math.cbrt","Math.cbrt"],
        ["Math.ceil","Math.ceil"],
        ["Math.clz32","Math.clz32"],
        ["Math.cos","Math.cos"],
        ["Math.cosh","Math.cosh"],
        ["Math.exp","Math.exp"],
        ["Math.expm1","Math.expm1"],
        ["Math.floor","Math.floor"],
        ["Math.fround","Math.fround"],
        ["Math.hypot","Math.hypot"],
        ["Math.imul","Math.imul"],
        ["Math.log","Math.log"],
        ["Math.log1p","Math.log1p"],
        ["Math.log10","Math.log10"],
        ["Math.log2","Math.log2"],
        ["Math.max","Math.max"],
        ["Math.min","Math.min"],
        ["Math.pow","Math.pow"],
        ["Math.random","Math.random"],
        ["Math.round","Math.round"],
        ["Math.sign","Math.sign"],
        ["Math.sin","Math.sin"],
        ["Math.sinh","Math.sinh"],
        ["Math.sqrt","Math.sqrt"],
        ["Math.tan","Math.tan"],
        ["Math.tanh","Math.tanh"],
        ["Math.trunc","Math.trunc"],  
        ["null","null"]
      ]), "math");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

