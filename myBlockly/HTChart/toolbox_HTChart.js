var catHTChart = '<xml><category name="%{BKY_HTCHART}" colour="%{BKY_HTCHART_HUE}">'+
'  <block type="variables_set">'+
'    <field name="VAR">Dataset</field>'+
'    <value name="VALUE">'+
'      <block type="DHT_datasetcheck">'+
'        <value name="dataset_">'+
'          <block type="text">'+
'            <field name="TEXT">00:00:00,30,60;00:00:01,20,80;</field>'+
'          </block>'+
'        </value>'+
'        <value name="count_">'+
'          <block type="math_number">'+
'            <field name="NUM">20</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="DHT_chart">'+
'    <field name="type_">LineChart</field>'+
'    <value name="value_">'+
'      <block type="text">'+
'        <field name="TEXT">00:00:00,30,60;00:00:01,20,80;</field>'+
'      </block>'+
'    </value>'+
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">600</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">300</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="title_x_">'+
'      <block type="text">'+
'        <field name="TEXT">time</field>'+
'      </block>'+
'    </value>'+
'    <value name="title_y_">'+
'      <block type="text">'+
'        <field name="TEXT">value</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+
'</category></xml>';