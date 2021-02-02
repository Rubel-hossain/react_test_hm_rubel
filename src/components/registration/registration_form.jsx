import React from "react";
import "./scss/registration.scss";
export default function RegistrationForm() {
  let red = "red";
  return (
    <div className="register-form">
      <form id="register_form">
        <div className="row mt-5 pt-5">
          <div className="col-md-6 right_side_reg_form">
            <div className="form-group">
              <label>
                Firs Name <span style={{ color: red }}>*</span>
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="First Name *"
                name="first_name"
                value=""
                autofocus
              />
            </div>
            <label>
              Select Gender <span style={{ color: red }}>*</span>
            </label>
            <div className="form-group cusSelect">
              <select required className="form-control" name="gender">
                <option>
                  Gender <i className="fa fa-book"></i>
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <label>
              Date Of Birth <span style={{ color: red }}>*</span>
            </label>
            <div>
              <div className="col-md-4">
                <div className="form-group">
                  <select required className="form-control" name="year">
                    <option value="">YY</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <select required className="form-control" name="month">
                    <option value="">MM</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <select required className="form-control" name="date">
                    <option value="">DD</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
              </div>
            </div>

            <label>
              Country Code <span style={{ color: red }}>*</span>
            </label>
            <div className="form-group">
              <select required className="form-control" name="country_code">
                <option>
                  Country Code <i className="fa fa-book"></i>
                </option>
                <option data-countryid="93" value="+93">
                  Afghanistan(+93)
                </option>
                <option data-countryid="355" value="+355">
                  Albania(+355)
                </option>
                <option data-countryid="213" value="+213">
                  Algeria(+213)
                </option>
                <option data-countryid="1684" value="+1684">
                  American Samoa(+1684)
                </option>
                <option data-countryid="376" value="+376">
                  Andorra(+376)
                </option>
                <option data-countryid="244" value="+244">
                  Angola(+244)
                </option>
                <option data-countryid="1264" value="+1264">
                  Anguilla(+1264)
                </option>
                <option data-countryid="0" value="+0">
                  Antarctica(+0)
                </option>
                <option data-countryid="1268" value="+1268">
                  Antigua And Barbuda(+1268)
                </option>
                <option data-countryid="54" value="+54">
                  Argentina(+54)
                </option>
                <option data-countryid="374" value="+374">
                  Armenia(+374)
                </option>
                <option data-countryid="297" value="+297">
                  Aruba(+297)
                </option>
                <option data-countryid="61" value="+61">
                  Australia(+61)
                </option>
                <option data-countryid="43" value="+43">
                  Austria(+43)
                </option>
                <option data-countryid="994" value="+994">
                  Azerbaijan(+994)
                </option>
                <option data-countryid="1242" value="+1242">
                  Bahamas The(+1242)
                </option>
                <option data-countryid="973" value="+973">
                  Bahrain(+973)
                </option>
                <option data-countryid="880" value="+880" selected>
                  Bangladesh(+880)
                </option>
                <option data-countryid="1246" value="+1246">
                  Barbados(+1246)
                </option>
                <option data-countryid="375" value="+375">
                  Belarus(+375)
                </option>
                <option data-countryid="32" value="+32">
                  Belgium(+32)
                </option>
                <option data-countryid="501" value="+501">
                  Belize(+501)
                </option>
                <option data-countryid="229" value="+229">
                  Benin(+229)
                </option>
                <option data-countryid="1441" value="+1441">
                  Bermuda(+1441)
                </option>
                <option data-countryid="975" value="+975">
                  Bhutan(+975)
                </option>
                <option data-countryid="591" value="+591">
                  Bolivia(+591)
                </option>
                <option data-countryid="387" value="+387">
                  Bosnia and Herzegovina(+387)
                </option>
                <option data-countryid="267" value="+267">
                  Botswana(+267)
                </option>
                <option data-countryid="0" value="+0">
                  Bouvet Island(+0)
                </option>
                <option data-countryid="55" value="+55">
                  Brazil(+55)
                </option>
                <option data-countryid="246" value="+246">
                  British Indian Ocean Territory(+246)
                </option>
                <option data-countryid="673" value="+673">
                  Brunei(+673)
                </option>
                <option data-countryid="359" value="+359">
                  Bulgaria(+359)
                </option>
                <option data-countryid="226" value="+226">
                  Burkina Faso(+226)
                </option>
                <option data-countryid="257" value="+257">
                  Burundi(+257)
                </option>
                <option data-countryid="855" value="+855">
                  Cambodia(+855)
                </option>
                <option data-countryid="237" value="+237">
                  Cameroon(+237)
                </option>
                <option data-countryid="1" value="+1">
                  Canada(+1)
                </option>
                <option data-countryid="238" value="+238">
                  Cape Verde(+238)
                </option>
                <option data-countryid="1345" value="+1345">
                  Cayman Islands(+1345)
                </option>
                <option data-countryid="236" value="+236">
                  Central African Republic(+236)
                </option>
                <option data-countryid="235" value="+235">
                  Chad(+235)
                </option>
                <option data-countryid="56" value="+56">
                  Chile(+56)
                </option>
                <option data-countryid="86" value="+86">
                  China(+86)
                </option>
                <option data-countryid="61" value="+61">
                  Christmas Island(+61)
                </option>
                <option data-countryid="672" value="+672">
                  Cocos (Keeling) Islands(+672)
                </option>
                <option data-countryid="57" value="+57">
                  Colombia(+57)
                </option>
                <option data-countryid="269" value="+269">
                  Comoros(+269)
                </option>
                <option data-countryid="242" value="+242">
                  Republic Of The Congo(+242)
                </option>
                <option data-countryid="242" value="+242">
                  Democratic Republic Of The Congo(+242)
                </option>
                <option data-countryid="682" value="+682">
                  Cook Islands(+682)
                </option>
                <option data-countryid="506" value="+506">
                  Costa Rica(+506)
                </option>
                <option data-countryid="225" value="+225">
                  Cote D'Ivoire (Ivory Coast)(+225)
                </option>
                <option data-countryid="385" value="+385">
                  Croatia (Hrvatska)(+385)
                </option>
                <option data-countryid="53" value="+53">
                  Cuba(+53)
                </option>
                <option data-countryid="357" value="+357">
                  Cyprus(+357)
                </option>
                <option data-countryid="420" value="+420">
                  Czech Republic(+420)
                </option>
                <option data-countryid="45" value="+45">
                  Denmark(+45)
                </option>
                <option data-countryid="253" value="+253">
                  Djibouti(+253)
                </option>
                <option data-countryid="1767" value="+1767">
                  Dominica(+1767)
                </option>
                <option data-countryid="1809" value="+1809">
                  Dominican Republic(+1809)
                </option>
                <option data-countryid="670" value="+670">
                  East Timor(+670)
                </option>
                <option data-countryid="593" value="+593">
                  Ecuador(+593)
                </option>
                <option data-countryid="20" value="+20">
                  Egypt(+20)
                </option>
                <option data-countryid="503" value="+503">
                  El Salvador(+503)
                </option>
                <option data-countryid="240" value="+240">
                  Equatorial Guinea(+240)
                </option>
                <option data-countryid="291" value="+291">
                  Eritrea(+291)
                </option>
                <option data-countryid="372" value="+372">
                  Estonia(+372)
                </option>
                <option data-countryid="251" value="+251">
                  Ethiopia(+251)
                </option>
                <option data-countryid="61" value="+61">
                  External Territories of Australia(+61)
                </option>
                <option data-countryid="500" value="+500">
                  Falkland Islands(+500)
                </option>
                <option data-countryid="298" value="+298">
                  Faroe Islands(+298)
                </option>
                <option data-countryid="679" value="+679">
                  Fiji Islands(+679)
                </option>
                <option data-countryid="358" value="+358">
                  Finland(+358)
                </option>
                <option data-countryid="33" value="+33">
                  France(+33)
                </option>
                <option data-countryid="594" value="+594">
                  French Guiana(+594)
                </option>
                <option data-countryid="689" value="+689">
                  French Polynesia(+689)
                </option>
                <option data-countryid="0" value="+0">
                  French Southern Territories(+0)
                </option>
                <option data-countryid="220" value="+220">
                  Gambia The(+220)
                </option>
                <option data-countryid="995" value="+995">
                  Georgia(+995)
                </option>
                <option data-countryid="49" value="+49">
                  Germany(+49)
                </option>
                <option data-countryid="233" value="+233">
                  Ghana(+233)
                </option>
                <option data-countryid="350" value="+350">
                  Gibraltar(+350)
                </option>
                <option data-countryid="30" value="+30">
                  Greece(+30)
                </option>
                <option data-countryid="299" value="+299">
                  Greenland(+299)
                </option>
                <option data-countryid="1473" value="+1473">
                  Grenada(+1473)
                </option>
                <option data-countryid="590" value="+590">
                  Guadeloupe(+590)
                </option>
                <option data-countryid="1671" value="+1671">
                  Guam(+1671)
                </option>
                <option data-countryid="502" value="+502">
                  Guatemala(+502)
                </option>
                <option data-countryid="44" value="+44">
                  Guernsey and Alderney(+44)
                </option>
                <option data-countryid="224" value="+224">
                  Guinea(+224)
                </option>
                <option data-countryid="245" value="+245">
                  Guinea-Bissau(+245)
                </option>
                <option data-countryid="592" value="+592">
                  Guyana(+592)
                </option>
                <option data-countryid="509" value="+509">
                  Haiti(+509)
                </option>
                <option data-countryid="0" value="+0">
                  Heard and McDonald Islands(+0)
                </option>
                <option data-countryid="504" value="+504">
                  Honduras(+504)
                </option>
                <option data-countryid="852" value="+852">
                  Hong Kong S.A.R.(+852)
                </option>
                <option data-countryid="36" value="+36">
                  Hungary(+36)
                </option>
                <option data-countryid="354" value="+354">
                  Iceland(+354)
                </option>
                <option data-countryid="91" value="+91">
                  India(+91)
                </option>
                <option data-countryid="62" value="+62">
                  Indonesia(+62)
                </option>
                <option data-countryid="98" value="+98">
                  Iran(+98)
                </option>
                <option data-countryid="964" value="+964">
                  Iraq(+964)
                </option>
                <option data-countryid="353" value="+353">
                  Ireland(+353)
                </option>
                <option data-countryid="972" value="+972">
                  Israel(+972)
                </option>
                <option data-countryid="39" value="+39">
                  Italy(+39)
                </option>
                <option data-countryid="1876" value="+1876">
                  Jamaica(+1876)
                </option>
                <option data-countryid="81" value="+81">
                  Japan(+81)
                </option>
                <option data-countryid="44" value="+44">
                  Jersey(+44)
                </option>
                <option data-countryid="962" value="+962">
                  Jordan(+962)
                </option>
                <option data-countryid="7" value="+7">
                  Kazakhstan(+7)
                </option>
                <option data-countryid="254" value="+254">
                  Kenya(+254)
                </option>
                <option data-countryid="686" value="+686">
                  Kiribati(+686)
                </option>
                <option data-countryid="850" value="+850">
                  Korea North(+850)
                </option>
                <option data-countryid="82" value="+82">
                  Korea South(+82)
                </option>
                <option data-countryid="965" value="+965">
                  Kuwait(+965)
                </option>
                <option data-countryid="996" value="+996">
                  Kyrgyzstan(+996)
                </option>
                <option data-countryid="856" value="+856">
                  Laos(+856)
                </option>
                <option data-countryid="371" value="+371">
                  Latvia(+371)
                </option>
                <option data-countryid="961" value="+961">
                  Lebanon(+961)
                </option>
                <option data-countryid="266" value="+266">
                  Lesotho(+266)
                </option>
                <option data-countryid="231" value="+231">
                  Liberia(+231)
                </option>
                <option data-countryid="218" value="+218">
                  Libya(+218)
                </option>
                <option data-countryid="423" value="+423">
                  Liechtenstein(+423)
                </option>
                <option data-countryid="370" value="+370">
                  Lithuania(+370)
                </option>
                <option data-countryid="352" value="+352">
                  Luxembourg(+352)
                </option>
                <option data-countryid="853" value="+853">
                  Macau S.A.R.(+853)
                </option>
                <option data-countryid="389" value="+389">
                  Macedonia(+389)
                </option>
                <option data-countryid="261" value="+261">
                  Madagascar(+261)
                </option>
                <option data-countryid="265" value="+265">
                  Malawi(+265)
                </option>
                <option data-countryid="60" value="+60">
                  Malaysia(+60)
                </option>
                <option data-countryid="960" value="+960">
                  Maldives(+960)
                </option>
                <option data-countryid="223" value="+223">
                  Mali(+223)
                </option>
                <option data-countryid="356" value="+356">
                  Malta(+356)
                </option>
                <option data-countryid="44" value="+44">
                  Man (Isle of)(+44)
                </option>
                <option data-countryid="692" value="+692">
                  Marshall Islands(+692)
                </option>
                <option data-countryid="596" value="+596">
                  Martinique(+596)
                </option>
                <option data-countryid="222" value="+222">
                  Mauritania(+222)
                </option>
                <option data-countryid="230" value="+230">
                  Mauritius(+230)
                </option>
                <option data-countryid="269" value="+269">
                  Mayotte(+269)
                </option>
                <option data-countryid="52" value="+52">
                  Mexico(+52)
                </option>
                <option data-countryid="691" value="+691">
                  Micronesia(+691)
                </option>
                <option data-countryid="373" value="+373">
                  Moldova(+373)
                </option>
                <option data-countryid="377" value="+377">
                  Monaco(+377)
                </option>
                <option data-countryid="976" value="+976">
                  Mongolia(+976)
                </option>
                <option data-countryid="1664" value="+1664">
                  Montserrat(+1664)
                </option>
                <option data-countryid="212" value="+212">
                  Morocco(+212)
                </option>
                <option data-countryid="258" value="+258">
                  Mozambique(+258)
                </option>
                <option data-countryid="95" value="+95">
                  Myanmar(+95)
                </option>
                <option data-countryid="264" value="+264">
                  Namibia(+264)
                </option>
                <option data-countryid="674" value="+674">
                  Nauru(+674)
                </option>
                <option data-countryid="977" value="+977">
                  Nepal(+977)
                </option>
                <option data-countryid="599" value="+599">
                  Netherlands Antilles(+599)
                </option>
                <option data-countryid="31" value="+31">
                  Netherlands The(+31)
                </option>
                <option data-countryid="687" value="+687">
                  New Caledonia(+687)
                </option>
                <option data-countryid="64" value="+64">
                  New Zealand(+64)
                </option>
                <option data-countryid="505" value="+505">
                  Nicaragua(+505)
                </option>
                <option data-countryid="227" value="+227">
                  Niger(+227)
                </option>
                <option data-countryid="234" value="+234">
                  Nigeria(+234)
                </option>
                <option data-countryid="683" value="+683">
                  Niue(+683)
                </option>
                <option data-countryid="672" value="+672">
                  Norfolk Island(+672)
                </option>
                <option data-countryid="1670" value="+1670">
                  Northern Mariana Islands(+1670)
                </option>
                <option data-countryid="47" value="+47">
                  Norway(+47)
                </option>
                <option data-countryid="968" value="+968">
                  Oman(+968)
                </option>
                <option data-countryid="92" value="+92">
                  Pakistan(+92)
                </option>
                <option data-countryid="680" value="+680">
                  Palau(+680)
                </option>
                <option data-countryid="970" value="+970">
                  Palestinian Territory Occupied(+970)
                </option>
                <option data-countryid="507" value="+507">
                  Panama(+507)
                </option>
                <option data-countryid="675" value="+675">
                  Papua new Guinea(+675)
                </option>
                <option data-countryid="595" value="+595">
                  Paraguay(+595)
                </option>
                <option data-countryid="51" value="+51">
                  Peru(+51)
                </option>
                <option data-countryid="63" value="+63">
                  Philippines(+63)
                </option>
                <option data-countryid="0" value="+0">
                  Pitcairn Island(+0)
                </option>
                <option data-countryid="48" value="+48">
                  Poland(+48)
                </option>
                <option data-countryid="351" value="+351">
                  Portugal(+351)
                </option>
                <option data-countryid="1787" value="+1787">
                  Puerto Rico(+1787)
                </option>
                <option data-countryid="974" value="+974">
                  Qatar(+974)
                </option>
                <option data-countryid="262" value="+262">
                  Reunion(+262)
                </option>
                <option data-countryid="40" value="+40">
                  Romania(+40)
                </option>
                <option data-countryid="70" value="+70">
                  Russia(+70)
                </option>
                <option data-countryid="250" value="+250">
                  Rwanda(+250)
                </option>
                <option data-countryid="290" value="+290">
                  Saint Helena(+290)
                </option>
                <option data-countryid="1869" value="+1869">
                  Saint Kitts And Nevis(+1869)
                </option>
                <option data-countryid="1758" value="+1758">
                  Saint Lucia(+1758)
                </option>
                <option data-countryid="508" value="+508">
                  Saint Pierre and Miquelon(+508)
                </option>
                <option data-countryid="1784" value="+1784">
                  Saint Vincent And The Grenadines(+1784)
                </option>
                <option data-countryid="684" value="+684">
                  Samoa(+684)
                </option>
                <option data-countryid="378" value="+378">
                  San Marino(+378)
                </option>
                <option data-countryid="239" value="+239">
                  Sao Tome and Principe(+239)
                </option>
                <option data-countryid="966" value="+966">
                  Saudi Arabia(+966)
                </option>
                <option data-countryid="221" value="+221">
                  Senegal(+221)
                </option>
                <option data-countryid="381" value="+381">
                  Serbia(+381)
                </option>
                <option data-countryid="248" value="+248">
                  Seychelles(+248)
                </option>
                <option data-countryid="232" value="+232">
                  Sierra Leone(+232)
                </option>
                <option data-countryid="65" value="+65">
                  Singapore(+65)
                </option>
                <option data-countryid="421" value="+421">
                  Slovakia(+421)
                </option>
                <option data-countryid="386" value="+386">
                  Slovenia(+386)
                </option>
                <option data-countryid="44" value="+44">
                  Smaller Territories of the UK(+44)
                </option>
                <option data-countryid="677" value="+677">
                  Solomon Islands(+677)
                </option>
                <option data-countryid="252" value="+252">
                  Somalia(+252)
                </option>
                <option data-countryid="27" value="+27">
                  South Africa(+27)
                </option>
                <option data-countryid="0" value="+0">
                  South Georgia(+0)
                </option>
                <option data-countryid="211" value="+211">
                  South Sudan(+211)
                </option>
                <option data-countryid="34" value="+34">
                  Spain(+34)
                </option>
                <option data-countryid="94" value="+94">
                  Sri Lanka(+94)
                </option>
                <option data-countryid="249" value="+249">
                  Sudan(+249)
                </option>
                <option data-countryid="597" value="+597">
                  Suriname(+597)
                </option>
                <option data-countryid="47" value="+47">
                  Svalbard And Jan Mayen Islands(+47)
                </option>
                <option data-countryid="268" value="+268">
                  Swaziland(+268)
                </option>
                <option data-countryid="46" value="+46">
                  Sweden(+46)
                </option>
                <option data-countryid="41" value="+41">
                  Switzerland(+41)
                </option>
                <option data-countryid="963" value="+963">
                  Syria(+963)
                </option>
                <option data-countryid="886" value="+886">
                  Taiwan(+886)
                </option>
                <option data-countryid="992" value="+992">
                  Tajikistan(+992)
                </option>
                <option data-countryid="255" value="+255">
                  Tanzania(+255)
                </option>
                <option data-countryid="66" value="+66">
                  Thailand(+66)
                </option>
                <option data-countryid="228" value="+228">
                  Togo(+228)
                </option>
                <option data-countryid="690" value="+690">
                  Tokelau(+690)
                </option>
                <option data-countryid="676" value="+676">
                  Tonga(+676)
                </option>
                <option data-countryid="1868" value="+1868">
                  Trinidad And Tobago(+1868)
                </option>
                <option data-countryid="216" value="+216">
                  Tunisia(+216)
                </option>
                <option data-countryid="90" value="+90">
                  Turkey(+90)
                </option>
                <option data-countryid="7370" value="+7370">
                  Turkmenistan(+7370)
                </option>
                <option data-countryid="1649" value="+1649">
                  Turks And Caicos Islands(+1649)
                </option>
                <option data-countryid="688" value="+688">
                  Tuvalu(+688)
                </option>
                <option data-countryid="256" value="+256">
                  Uganda(+256)
                </option>
                <option data-countryid="380" value="+380">
                  Ukraine(+380)
                </option>
                <option data-countryid="971" value="+971">
                  United Arab Emirates(+971)
                </option>
                <option data-countryid="44" value="+44">
                  United Kingdom(+44)
                </option>
                <option data-countryid="1" value="+1">
                  United States(+1)
                </option>
                <option data-countryid="1" value="+1">
                  United States Minor Outlying Islands(+1)
                </option>
                <option data-countryid="598" value="+598">
                  Uruguay(+598)
                </option>
                <option data-countryid="998" value="+998">
                  Uzbekistan(+998)
                </option>
                <option data-countryid="678" value="+678">
                  Vanuatu(+678)
                </option>
                <option data-countryid="39" value="+39">
                  Vatican City State (Holy See)(+39)
                </option>
                <option data-countryid="58" value="+58">
                  Venezuela(+58)
                </option>
                <option data-countryid="84" value="+84">
                  Vietnam(+84)
                </option>
                <option data-countryid="1284" value="+1284">
                  Virgin Islands (British)(+1284)
                </option>
                <option data-countryid="1340" value="+1340">
                  Virgin Islands (US)(+1340)
                </option>
                <option data-countryid="681" value="+681">
                  Wallis And Futuna Islands(+681)
                </option>
                <option data-countryid="212" value="+212">
                  Western Sahara(+212)
                </option>
                <option data-countryid="967" value="+967">
                  Yemen(+967)
                </option>
                <option data-countryid="38" value="+38">
                  Yugoslavia(+38)
                </option>
                <option data-countryid="260" value="+260">
                  Zambia(+260)
                </option>
                <option data-countryid="263" value="+263">
                  Zimbabwe(+263)
                </option>
                <option data-countryid="0" value="+0">
                  Gabon(+0)
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Enter Password <span style={{ color: red }}>*</span>
              </label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Password *"
                name="password"
              />
            </div>
          </div>

          <div className="col-md-6 left_side_reg_form">
            <div className="form-group">
              <label>
                Last Name <span style={{ color: red }}>*</span>
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Last Name *"
                name="last_name"
                value=""
              />
            </div>
            <div className="form-group">
              <label>Email (For notifications)</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
                name="email"
                value=""
              />
            </div>

            <label>
              On Behalf <span style={{ color: red }}>*</span>
            </label>
            <div className="form-group cusSelect">
              <select required className="form-control" name="on_behalf">
                <option>
                  On Behalf <i className="fa fa-book"></i>
                </option>
                <option value="1">Self</option>
                <option value="2">Daughter/Son</option>
                <option value="3">Sister</option>
                <option value="4">Brother</option>
                <option value="5">Friend</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Mobile No <span style={{ color: red }}>*</span>
              </label>
              <input
                required
                type="number"
                className="form-control phone_no"
                placeholder="Mobile *"
                name="mobile"
                value=""
              />
            </div>
            <div className="form-group">
              <label>
                Confirm Password <span style={{ color: red }}>*</span>
              </label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Confirm Password *"
                name="confirm_password"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btnSubmit ">
            Submit
          </button>
          <br />
          <br />
        </div>
      </form>
      <div className="text-center">
        <small>If you already have account please </small>
        <a href="#">Log In Page</a> <br />
        <small>
          By Clicking REGISTER You Agree To Our
          <a href="#">
            <u>Terms And Conditions</u>
          </a>
        </small>
      </div>
    </div>
  );
}
