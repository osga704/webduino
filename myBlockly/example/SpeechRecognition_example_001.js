var SpeechRecognition_example_001 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="XET3`{C@a}F7i!;%jtKr">Result</variable></variables><block type="setwindow" id="mF3L@(R=daf5s@gz!.~P" x="-11" y="-31"><field name="overflow">auto</field><value name="left"><block type="math_number" id="K035}[uQF(z4[!7iVUYQ"><field name="NUM">300</field></block></value><value name="top"><block type="math_number" id=";Jz:=Yl3EsqW!k}zVm+/"><field name="NUM">20</field></block></value><value name="width"><block type="math_number" id="M9P:vV}fU_@|/GV{^uZ+"><field name="NUM">500</field></block></value><value name="height"><block type="math_number" id="Go~AQ71$_b#5m:DRuy0V"><field name="NUM">500</field></block></value><next><block type="showtext" id="%eAoC9psqEGYqT2vOg+j"><value name="size"><block type="math_number" id="-q|69JZv*[/;dy^ty~`@"><field name="NUM">20</field></block></value><value name="color"><block type="colour_picker" id="xazmgh_+8F6u9zCvDJ9d"><field name="COLOUR">%23ff0000</field></block></value><value name="text"><block type="text" id="3b?=CV+q=1y@oM/cLYkY"><field name="TEXT">Speak a sentence contains keyword  "big" or "small"</field></block></value><next><block type="image_create" id="%23`SO.d:p/1U)+t%RBRW`"><value name="id_"><block type="text" id="zn%23:(%CB=z(n!7fW5Jf{"><field name="TEXT">role</field></block></value><value name="url_"><block type="text" id="W_q9zZmLz/t}$@gLgvCS"><field name="TEXT">https://pic.pimg.tw/yide168/1512182509-918346.png</field></block></value><value name="width_"><block type="math_number" id="90/)mlNsYEH?O.3:-lx["><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="dFy*eS8Ya~hSOpKP06*B"><field name="NUM">100</field></block></value><value name="left_"><block type="math_number" id="WUDQa{/VRb)BmdL3SW%23d"><field name="NUM">150</field></block></value><value name="top_"><block type="math_number" id=",ENqBX3Z2|kTA+c]kDxM"><field name="NUM">150</field></block></value><value name="zindex_"><block type="math_number" id="LUyCRv`j~E1Ws**Sa$Wa"><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="FC_e[b5Kn0Up!1,1!.x!"><field name="BOOL">TRUE</field></block></value><next><block type="button_create" id="fG?eF30`L9:Um$$C{b26"><value name="id_"><block type="text" id="svQ{C}VO6hb_s+Y%23@eC|"><field name="TEXT">restart</field></block></value><value name="left_"><block type="math_number" id="=8t}7zG`D3cu(0$Fm,hI"><field name="NUM">0</field></block></value><value name="top_"><block type="math_number" id="6`te3IteR%23[OS*`@8ZOi"><field name="NUM">50</field></block></value><value name="width_"><block type="math_number" id="oUG^ebMwviq{)O``1G29"><field name="NUM">200</field></block></value><value name="height_"><block type="math_number" id="pWfcJD1kQp{t+K5b^y+["><field name="NUM">30</field></block></value><value name="opacity_"><block type="math_number" id="VD?*YjaqHwbgVY%23JPtmG"><field name="NUM">1</field></block></value><value name="bgcolor_"><block type="logic_null" id="Ih.~5i=+!_^k*`d!LFA`"></block></value><value name="value_"><block type="text" id="(0=nzHCCmK@dQsGmJW_/"><field name="TEXT">Restart Speech Recognition</field></block></value><value name="zindex_"><block type="math_number" id="F|5lc(UOatqf82=4Vrmi"><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="+Q-:.tHMkO0!sx]q(^Gm"><field name="BOOL">TRUE</field></block></value><next><block type="button_onclick_do" id="JN}LxmyH-m1=ypMeM.$Q"><value name="id_"><block type="text" id="qo:B9CUi=SvTok%23Pbkyr"><field name="TEXT">restart</field></block></value><statement name="do_"><block type="SpeechRecognition_run" id="JtLm@XU%238m:e|sNgcPok"><field name="language_">en-NZ</field><next><block type="TextToSpeech_run" id="t=ioaoF-MXnSV)!3.*aQ"><field name="lang_">en-US</field><value name="volume_"><block type="math_number" id="wC8`[toBr7BJ85LW`GFS"><field name="NUM">1</field></block></value><value name="rate_"><block type="math_number" id="p|L%+!NH^K:)/yC{)~37"><field name="NUM">1</field></block></value><value name="pitch_"><block type="math_number" id="VT=;V;1%d]NbJOD%o,]R"><field name="NUM">1</field></block></value><value name="voice_"><block type="text" id="Aa+i7VpI%23KhjeegyQcj."><field name="TEXT"></field></block></value><value name="text_"><block type="text" id="^@KJbTy]vlm,2;[o:Q_@"><field name="TEXT">Restart Speech Recognition</field></block></value></block></next></block></statement><next><block type="SpeechRecognition_run" id="smxqb[b{JqsX6Fd:AD3B"><field name="language_">en-NZ</field><next><block type="SpeechRecognition_listener" id="Q/;,9e4%238ix6/1k`j3Q9"><statement name="do_"><block type="variables_set" id="WgoSc$V{4smbOP8+jr80"><field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field><value name="VALUE"><block type="SpeechRecognition_get" id="]VM_67C(_2(3TXND*~)+"></block></value><next><block type="controls_if" id="oqGS:(|{v$krZ^`QCQ?^"><value name="IF0"><block type="logic_compare" id="55HawZ%RIkpK:C]vM0y`"><field name="OP">NEQ</field><value name="A"><block type="variables_get" id="g%UQ?P!`Vx4CV{]7TIh5"><field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field></block></value><value name="B"><block type="text" id="(:Rr(r;Cf21i{LX6~^-."><field name="TEXT"></field></block></value></block></value><statement name="DO0"><block type="showtext" id="JGGFG(c`/C?zh*CDF;s."><value name="size"><block type="math_number" id="LEfVcrGd:%V7!tdUkpB*"><field name="NUM">20</field></block></value><value name="color"><block type="colour_picker" id="Dfo{:|k|$l9Au9,l;0RI"><field name="COLOUR">%23ff0000</field></block></value><value name="text"><block type="variables_get" id="btOU|aK[;gbXA%233FP,q8"><field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field></block></value></block></statement><next><block type="controls_if" id="B7Z+YOI*4~UlZRBn+hN;"><mutation elseif="1"></mutation><value name="IF0"><block type="logic_compare" id="H7yV(!aden,T*o$$Bm]6"><field name="OP">NEQ</field><value name="A"><block type="cmd5" id="a5oU-O)C8U=GG-:m?~!:"><value name="myVar"><block type="cmd5" id="Q5tKr6TVyic[:wVRi]Au"><value name="myVar"><block type="variables_get" id="PZOC7OSfYhFl_A9p!0AC"><field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field></block></value><value name="cmd5_0"><block type="cmd7" id="v?3hVzC6WZcn4qS89r{8"><field name="cmd_string">toLocaleLowerCase</field></block></value></block></value><value name="cmd5_0"><block type="cmd7" id="P~yT4[p+FHI=n$}$*HR^"><field name="cmd_string">indexOf</field></block></value><value name="cmd5_1"><block type="text" id="QL7W%23hP%Q+2U][xCd]Y{"><field name="TEXT">big</field></block></value></block></value><value name="B"><block type="math_number" id="%Ir-lazd0etNbul|J^I/"><field name="NUM">-1</field></block></value></block></value><statement name="DO0"><block type="image_resize" id="!`0Qsx}!ouieo5nTt{ns"><value name="id_"><block type="text" id="TZ-5o=eP|]$g:hV49o3F"><field name="TEXT">role</field></block></value><value name="percentage_"><block type="math_number" id="G6VlW7oC!ae+yR!^=W[@"><field name="NUM">150</field></block></value></block></statement><value name="IF1"><block type="logic_compare" id=";Fj3to,`kao]T~n6B2n6"><field name="OP">NEQ</field><value name="A"><block type="cmd5" id="XLSWw0+nHYAk%23Xj0Tii)"><value name="myVar"><block type="cmd5" id="Mq7hDm15=`c9ssvzvMVV"><value name="myVar"><block type="variables_get" id="O)1C+bWjOP%23hZXYEACWh"><field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field></block></value><value name="cmd5_0"><block type="cmd7" id="Cp~c49NcvB.a{oE=HlQd"><field name="cmd_string">toLocaleLowerCase</field></block></value></block></value><value name="cmd5_0"><block type="cmd7" id="hW`i~@|1ysVd-uV~9$;U"><field name="cmd_string">indexOf</field></block></value><value name="cmd5_1"><block type="text" id="7JLSb!$l_aHgB%237QxQ?t"><field name="TEXT">small</field></block></value></block></value><value name="B"><block type="math_number" id="%W+Df%23;O-S6m=f:u7BVq"><field name="NUM">-1</field></block></value></block></value><statement name="DO1"><block type="image_resize" id="+*4;UTt/vFEKfE$q~EgC"><value name="id_"><block type="text" id="*7D5O*i9ka/`ehW}3.|G"><field name="TEXT">role</field></block></value><value name="percentage_"><block type="math_number" id="Xj2,BAUWo63Oc2Gq$mfL"><field name="NUM">50</field></block></value></block></statement></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
