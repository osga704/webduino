var BitMatrixLed_example_003 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="E0{JhT--:icAcXA/hkCL">i</variable></variables><block type="BitMatrixLed_host" id="{(oGD{n+JS-zRhoPm*nb" x="74" y="-10"><value name="host_"><block type="text" id="TW7no?WizA#,_EouHxoJ"><field name="TEXT">http://192.168.201.30</field></block></value><next><block type="controls_whileUntil" id="OWgvnF/nYZlGc}2d+_rP"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_boolean" id="nxkks[-Gt/AaY3(]nYUa"><field name="BOOL">TRUE</field></block></value><statement name="DO"><block type="variables_set" id="J7H,RoELib/%tvLaD2X}"><field name="VAR" id="E0{JhT--:icAcXA/hkCL" variabletype="">i</field><value name="VALUE"><block type="math_random_int" id="ym21$d7.ENHjfiWICqNi"><value name="FROM"><block type="math_number" id="H?w29.Ku8Obg]U3J,R]N"><field name="NUM">0</field></block></value><value name="TO"><block type="math_number" id="k_-M9Y(zf,#1WehB-uTC"><field name="NUM">24</field></block></value></block></value><next><block type="BitMatrixLed_custom" id="$a!;$ReriHvx9SMxoL%1"><value name="cmd"><block type="BitMatrixLed_cmd" id="6Gp%%CGnPIrMG{074{Ev"><field name="cmd">rgb</field></block></value><value name="P1"><block type="variables_get" id="q`4b^kPR@Dumbq*3inX^"><field name="VAR" id="E0{JhT--:icAcXA/hkCL" variabletype="">i</field></block></value><value name="P2"><block type="colour_random" id="ip;RVdk]0FTiRC6w]+C]"></block></value><value name="P3"><block type="text" id="lL#=Z1v]t5!e|Vn5P=4S"><field name="TEXT">stop</field></block></value><value name="P4"><block type="text" id="WoG2++:aaw*6}en-rbz0"><field name="TEXT"></field></block></value><value name="P5"><block type="text" id="4Yjxm,2P}QK3%frsm;g,"><field name="TEXT"></field></block></value><value name="P6"><block type="text" id="d$DK-s_lfkK$~4~wUeQ:"><field name="TEXT"></field></block></value><value name="P7"><block type="text" id=")dHIA:tt7?j8t!ym_fO?"><field name="TEXT"></field></block></value><value name="P8"><block type="text" id="4DKe%2GddTcxiu$::EGC"><field name="TEXT"></field></block></value><value name="P9"><block type="text" id="72SZ1ihL!Nk9+*$$u|H7"><field name="TEXT"></field></block></value><next><block type="time_delay" id="Jbb*=#ccRVzsdekHuwqw"><value name="seconds"><block type="math_number" id=".dWh|JgeS-7#KQ7F6qR7"><field name="NUM">1</field></block></value><next><block type="BitMatrixLed_custom" id="uD(N$dg}9V[-FS|36^tI"><value name="cmd"><block type="BitMatrixLed_cmd" id="!R8Pl)[w/qX!oPUK^cv2"><field name="cmd">rgb</field></block></value><value name="P1"><block type="variables_get" id="@vU+Vm[(]:g0mDRjRRP4"><field name="VAR" id="E0{JhT--:icAcXA/hkCL" variabletype="">i</field></block></value><value name="P2"><block type="colour_picker" id="L`/)IO)!$gVP.^LRM8fH"><field name="COLOUR">#000000</field></block></value><value name="P3"><block type="text" id="IYGEqxa8HN/q-)b?a?*C"><field name="TEXT"></field></block></value><value name="P4"><block type="text" id="N.q,gtDoRDrWS6u|vp8R"><field name="TEXT"></field></block></value><value name="P5"><block type="text" id="6~j~544@W`1[ip+j:i^3"><field name="TEXT"></field></block></value><value name="P6"><block type="text" id="1Nf*/^0jmaXF$.JShi/v"><field name="TEXT"></field></block></value><value name="P7"><block type="text" id="j2Z%-a`Je/sx=s$/vS^%"><field name="TEXT"></field></block></value><value name="P8"><block type="text" id="@#rO=qiTX,Cm(Q^WIMa6"><field name="TEXT"></field></block></value><value name="P9"><block type="text" id="0Cw;)kA3qTaU{0~tDgRw"><field name="TEXT"></field></block></value></block></next></block></next></block></next></block></statement></block></next></block></xml>';