import React from 'react';
import { Form, Select, DatePicker, InputNumber, Button } from 'antd';

const TreeInfoForm = ({ onSubmit }) => {

  const onFinish = (values) => {
    console.log('Success:', values);
    onSubmit(values); // 调用传递进来的 onSubmit 函数
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="stepImg stepImg1"></div>
      <h2 className="stepTitle">Planting Basic Information</h2>
      <p className="stepIntro">Please select the planting country, choose the variety (if there are different varieties, you can fill them out in batches), and select or enter the quantity of trees to be planted.</p>
      
      <Form
        name="treeInfoForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="contriFormContent"
      >
        <Form.Item 
          name="country"
          label="Planting Country"
          rules={[{ required: true, message: 'Please select a country!' }]}
        >
          <Select placeholder="Select a country">
                        <Select.Option value="afghanistan">Afghanistan</Select.Option>
            <Select.Option value="albania">Albania</Select.Option>
            <Select.Option value="algeria">Algeria</Select.Option>
            <Select.Option value="andorra">Andorra</Select.Option>
            <Select.Option value="angola">Angola</Select.Option>
            <Select.Option value="antigua_and_barbuda">Antigua and Barbuda</Select.Option>
            <Select.Option value="argentina">Argentina</Select.Option>
            <Select.Option value="armenia">Armenia</Select.Option>
            <Select.Option value="australia">Australia</Select.Option>
            <Select.Option value="austria">Austria</Select.Option>
            <Select.Option value="azerbaijan">Azerbaijan</Select.Option>
            <Select.Option value="bahamas">Bahamas</Select.Option>
            <Select.Option value="bahrain">Bahrain</Select.Option>
            <Select.Option value="bangladesh">Bangladesh</Select.Option>
            <Select.Option value="barbados">Barbados</Select.Option>
            <Select.Option value="belarus">Belarus</Select.Option>
            <Select.Option value="belgium">Belgium</Select.Option>
            <Select.Option value="belize">Belize</Select.Option>
            <Select.Option value="benin">Benin</Select.Option>
            <Select.Option value="bhutan">Bhutan</Select.Option>
            <Select.Option value="bolivia">Bolivia</Select.Option>
            <Select.Option value="bosnia_and_herzegovina">Bosnia and Herzegovina</Select.Option>
            <Select.Option value="botswana">Botswana</Select.Option>
            <Select.Option value="brazil">Brazil</Select.Option>
            <Select.Option value="brunei">Brunei</Select.Option>
            <Select.Option value="bulgaria">Bulgaria</Select.Option>
            <Select.Option value="burkina_faso">Burkina Faso</Select.Option>
            <Select.Option value="burundi">Burundi</Select.Option>
            <Select.Option value="cabo_verde">Cabo Verde</Select.Option>
            <Select.Option value="cambodia">Cambodia</Select.Option>
            <Select.Option value="cameroon">Cameroon</Select.Option>
            <Select.Option value="canada">Canada</Select.Option>
            <Select.Option value="central_african_republic">Central African Republic</Select.Option>
            <Select.Option value="chad">Chad</Select.Option>
            <Select.Option value="chile">Chile</Select.Option>
            <Select.Option value="china">China</Select.Option>
            <Select.Option value="colombia">Colombia</Select.Option>
            <Select.Option value="comoros">Comoros</Select.Option>
            <Select.Option value="congo_democratic_republic_of_the">Congo, Democratic Republic of the</Select.Option>
            <Select.Option value="congo_republic_of_the">Congo, Republic of the</Select.Option>
            <Select.Option value="costa_rica">Costa Rica</Select.Option>
            <Select.Option value="cote_divoire">Côte d'Ivoire</Select.Option>
            <Select.Option value="croatia">Croatia</Select.Option>
            <Select.Option value="cuba">Cuba</Select.Option>
            <Select.Option value="cyprus">Cyprus</Select.Option>
            <Select.Option value="czech_republic">Czech Republic</Select.Option>
            <Select.Option value="denmark">Denmark</Select.Option>
            <Select.Option value="djibouti">Djibouti</Select.Option>
            <Select.Option value="dominica">Dominica</Select.Option>
            <Select.Option value="dominican_republic">Dominican Republic</Select.Option>
            <Select.Option value="ecuador">Ecuador</Select.Option>
            <Select.Option value="egypt">Egypt</Select.Option>
            <Select.Option value="el_salvador">El Salvador</Select.Option>
            <Select.Option value="equatorial_guinea">Equatorial Guinea</Select.Option>
            <Select.Option value="eritrea">Eritrea</Select.Option>
            <Select.Option value="estonia">Estonia</Select.Option>
            <Select.Option value="eswatini">Eswatini</Select.Option>
            <Select.Option value="ethiopia">Ethiopia</Select.Option>
            <Select.Option value="fiji">Fiji</Select.Option>
            <Select.Option value="finland">Finland</Select.Option>
            <Select.Option value="france">France</Select.Option>
            <Select.Option value="gabon">Gabon</Select.Option>
            <Select.Option value="gambia">Gambia</Select.Option>
            <Select.Option value="georgia">Georgia</Select.Option>
            <Select.Option value="germany">Germany</Select.Option>
            <Select.Option value="ghana">Ghana</Select.Option>
            <Select.Option value="greece">Greece</Select.Option>
            <Select.Option value="grenada">Grenada</Select.Option>
            <Select.Option value="guatemala">Guatemala</Select.Option>
            <Select.Option value="guinea">Guinea</Select.Option>
            <Select.Option value="guinea_bissau">Guinea-Bissau</Select.Option>
            <Select.Option value="guyana">Guyana</Select.Option>
            <Select.Option value="haiti">Haiti</Select.Option>
            <Select.Option value="honduras">Honduras</Select.Option>
            <Select.Option value="hungary">Hungary</Select.Option>
            <Select.Option value="iceland">Iceland</Select.Option>
            <Select.Option value="india">India</Select.Option>
            <Select.Option value="indonesia">Indonesia</Select.Option>
            <Select.Option value="iran">Iran</Select.Option>
            <Select.Option value="iraq">Iraq</Select.Option>
            <Select.Option value="ireland">Ireland</Select.Option>
            <Select.Option value="israel">Israel</Select.Option>
            <Select.Option value="italy">Italy</Select.Option>
            <Select.Option value="jamaica">Jamaica</Select.Option>
            <Select.Option value="japan">Japan</Select.Option>
            <Select.Option value="jordan">Jordan</Select.Option>
            <Select.Option value="kazakhstan">Kazakhstan</Select.Option>
            <Select.Option value="kenya">Kenya</Select.Option>
            <Select.Option value="kiribati">Kiribati</Select.Option>
            <Select.Option value="korea_north">Korea, North</Select.Option>
            <Select.Option value="korea_south">Korea, South</Select.Option>
            <Select.Option value="kuwait">Kuwait</Select.Option>
            <Select.Option value="kyrgyzstan">Kyrgyzstan</Select.Option>
            <Select.Option value="laos">Laos</Select.Option>
            <Select.Option value="latvia">Latvia</Select.Option>
            <Select.Option value="lebanon">Lebanon</Select.Option>
            <Select.Option value="lesotho">Lesotho</Select.Option>
            <Select.Option value="liberia">Liberia</Select.Option>
            <Select.Option value="libya">Libya</Select.Option>
            <Select.Option value="liechtenstein">Liechtenstein</Select.Option>
            <Select.Option value="lithuania">Lithuania</Select.Option>
            <Select.Option value="luxembourg">Luxembourg</Select.Option>
            <Select.Option value="madagascar">Madagascar</Select.Option>
            <Select.Option value="malawi">Malawi</Select.Option>
            <Select.Option value="malaysia">Malaysia</Select.Option>
            <Select.Option value="maldives">Maldives</Select.Option>
            <Select.Option value="mali">Mali</Select.Option>
            <Select.Option value="malta">Malta</Select.Option>
            <Select.Option value="marshall_islands">Marshall Islands</Select.Option>
            <Select.Option value="mauritania">Mauritania</Select.Option>
            <Select.Option value="mauritius">Mauritius</Select.Option>
            <Select.Option value="mexico">Mexico</Select.Option>
            <Select.Option value="micronesia">Micronesia</Select.Option>
            <Select.Option value="moldova">Moldova</Select.Option>
            <Select.Option value="monaco">Monaco</Select.Option>
            <Select.Option value="mongolia">Mongolia</Select.Option>
            <Select.Option value="montenegro">Montenegro</Select.Option>
            <Select.Option value="morocco">Morocco</Select.Option>
            <Select.Option value="mozambique">Mozambique</Select.Option>
            <Select.Option value="myanmar">Myanmar</Select.Option>
            <Select.Option value="namibia">Namibia</Select.Option>
            <Select.Option value="nauru">Nauru</Select.Option>
            <Select.Option value="nepal">Nepal</Select.Option>
            <Select.Option value="netherlands">Netherlands</Select.Option>
            <Select.Option value="new_zealand">New Zealand</Select.Option>
            <Select.Option value="nicaragua">Nicaragua</Select.Option>
            <Select.Option value="niger">Niger</Select.Option>
            <Select.Option value="nigeria">Nigeria</Select.Option>
            <Select.Option value="north_macedonia">North Macedonia</Select.Option>
            <Select.Option value="norway">Norway</Select.Option>
            <Select.Option value="oman">Oman</Select.Option>
            <Select.Option value="pakistan">Pakistan</Select.Option>
            <Select.Option value="palau">Palau</Select.Option>
            <Select.Option value="panama">Panama</Select.Option>
            <Select.Option value="papua_new_guinea">Papua New Guinea</Select.Option>
            <Select.Option value="paraguay">Paraguay</Select.Option>
            <Select.Option value="peru">Peru</Select.Option>
            <Select.Option value="philippines">Philippines</Select.Option>
            <Select.Option value="poland">Poland</Select.Option>
            <Select.Option value="portugal">Portugal</Select.Option>
            <Select.Option value="qatar">Qatar</Select.Option>
            <Select.Option value="romania">Romania</Select.Option>
            <Select.Option value="russia">Russia</Select.Option>
            <Select.Option value="rwanda">Rwanda</Select.Option>
            <Select.Option value="saint_kitts_and_nevis">Saint Kitts and Nevis</Select.Option>
            <Select.Option value="saint_lucia">Saint Lucia</Select.Option>
            <Select.Option value="saint_vincent_and_the_grenadines">Saint Vincent and the Grenadines</Select.Option>
            <Select.Option value="samoa">Samoa</Select.Option>
            <Select.Option value="san_marino">San Marino</Select.Option>
            <Select.Option value="sao_tome_and_principe">Sao Tome and Principe</Select.Option>
            <Select.Option value="saudi_arabia">Saudi Arabia</Select.Option>
            <Select.Option value="senegal">Senegal</Select.Option>
            <Select.Option value="serbia">Serbia</Select.Option>
            <Select.Option value="seychelles">Seychelles</Select.Option>
            <Select.Option value="sierra_leone">Sierra Leone</Select.Option>
            <Select.Option value="singapore">Singapore</Select.Option>
            <Select.Option value="slovakia">Slovakia</Select.Option>
            <Select.Option value="slovenia">Slovenia</Select.Option>
            <Select.Option value="solomon_islands">Solomon Islands</Select.Option>
            <Select.Option value="somalia">Somalia</Select.Option>
            <Select.Option value="south_africa">South Africa</Select.Option>
            <Select.Option value="south_korea">South Korea</Select.Option>
            <Select.Option value="south_sudan">South Sudan</Select.Option>
            <Select.Option value="spain">Spain</Select.Option>
            <Select.Option value="sri_lanka">Sri Lanka</Select.Option>
            <Select.Option value="sudan">Sudan</Select.Option>
            <Select.Option value="suriname">Suriname</Select.Option>
            <Select.Option value="sweden">Sweden</Select.Option>
            <Select.Option value="switzerland">Switzerland</Select.Option>
            <Select.Option value="syria">Syria</Select.Option>
            <Select.Option value="taiwan">Taiwan</Select.Option>
            <Select.Option value="tajikistan">Tajikistan</Select.Option>
            <Select.Option value="tanzania">Tanzania</Select.Option>
            <Select.Option value="thailand">Thailand</Select.Option>
            <Select.Option value="timor_leste">Timor-Leste</Select.Option>
            <Select.Option value="togo">Togo</Select.Option>
            <Select.Option value="tonga">Tonga</Select.Option>
            <Select.Option value="trinidad_and_tobago">Trinidad and Tobago</Select.Option>
            <Select.Option value="tunisia">Tunisia</Select.Option>
            <Select.Option value="turkey">Turkey</Select.Option>
            <Select.Option value="turkmenistan">Turkmenistan</Select.Option>
            <Select.Option value="tuvalu">Tuvalu</Select.Option>
            <Select.Option value="uganda">Uganda</Select.Option>
            <Select.Option value="ukraine">Ukraine</Select.Option>
            <Select.Option value="united_arab_emirates">United Arab Emirates</Select.Option>
            <Select.Option value="united_kingdom">United Kingdom</Select.Option>
            <Select.Option value="united_states">United States</Select.Option>
            <Select.Option value="uruguay">Uruguay</Select.Option>
            <Select.Option value="uzbekistan">Uzbekistan</Select.Option>
            <Select.Option value="vanuatu">Vanuatu</Select.Option>
            <Select.Option value="vatican_city">Vatican City</Select.Option>
            <Select.Option value="venezuela">Venezuela</Select.Option>
            <Select.Option value="vietnam">Vietnam</Select.Option>
            <Select.Option value="yemen">Yemen</Select.Option>
            <Select.Option value="zambia">Zambia</Select.Option>
            <Select.Option value="zimbabwe">Zimbabwe</Select.Option>
          </Select>
        </Form.Item>  

        <Form.Item 
          name="plantingDate"
          label="Planting Date"
          rules={[{ required: true, message: 'Please select a planting date!' }]}
        >
          <DatePicker />
        </Form.Item>
        
        <Form.Item 
          name="species"
          label="Species"
          rules={[{ required: true, message: 'Please select a specie!' }]}
        >
          <Select placeholder="Select a specie">
            <Select.Option value="Others">Others</Select.Option>
            <Select.Option value="acacia">Acacia</Select.Option>
            <Select.Option value="alder">Alder</Select.Option>
            <Select.Option value="apple">Apple</Select.Option>
            <Select.Option value="ash">Ash</Select.Option>
            <Select.Option value="aspen">Aspen</Select.Option>
            <Select.Option value="bamboo">Bamboo</Select.Option>
            <Select.Option value="baobab">Baobab</Select.Option>
            <Select.Option value="beech">Beech</Select.Option>
            <Select.Option value="birch">Birch</Select.Option>
            <Select.Option value="brazil-nut">Brazil Nut</Select.Option>
            <Select.Option value="cedar">Cedar</Select.Option>
            <Select.Option value="cherry">Cherry</Select.Option>
            <Select.Option value="chestnut">Chestnut</Select.Option>
            <Select.Option value="cypress">Cypress</Select.Option>
            <Select.Option value="dogwood">Dogwood</Select.Option>
            <Select.Option value="douglas-fir">Douglas Fir</Select.Option>
            <Select.Option value="ebony">Ebony</Select.Option>
            <Select.Option value="elm">Elm</Select.Option>
            <Select.Option value="eucalyptus">Eucalyptus</Select.Option>
            <Select.Option value="fir">Fir</Select.Option>
            <Select.Option value="ginkgo">Ginkgo</Select.Option>
            <Select.Option value="hawthorn">Hawthorn</Select.Option>
            <Select.Option value="hazel">Hazel</Select.Option>
            <Select.Option value="hickory">Hickory</Select.Option>
            <Select.Option value="hornbeam">Hornbeam</Select.Option>
            <Select.Option value="horse-chestnut">Horse Chestnut</Select.Option>
            <Select.Option value="juniper">Juniper</Select.Option>
            <Select.Option value="kauri">Kauri</Select.Option>
            <Select.Option value="larch">Larch</Select.Option>
            <Select.Option value="lime">Lime</Select.Option>
            <Select.Option value="magnolia">Magnolia</Select.Option>
            <Select.Option value="mahogany">Mahogany</Select.Option>
            <Select.Option value="maple">Maple</Select.Option>
            <Select.Option value="oak">Oak</Select.Option>
            <Select.Option value="olive">Olive</Select.Option>
            <Select.Option value="palm">Palm</Select.Option>
            <Select.Option value="pine">Pine</Select.Option>
            <Select.Option value="poplar">Poplar</Select.Option>
            <Select.Option value="redwood">Redwood</Select.Option>
            <Select.Option value="rowan">Rowan</Select.Option>
            <Select.Option value="spruce">Spruce</Select.Option>
            <Select.Option value="sycamore">Sycamore</Select.Option>
            <Select.Option value="teak">Teak</Select.Option>
            <Select.Option value="walnut">Walnut</Select.Option>
            <Select.Option value="willow">Willow</Select.Option>
            <Select.Option value="yew">Yew</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item 
          name="quantity"
          label="Tree Number"
          rules={[{ required: true, message: 'Please input the number of trees!' }]}
        >
          <InputNumber min={1} />
        </Form.Item>
        
        <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
        <Button className="selectionSubmit" type="primary" htmlType="submit">
          Next Step
        </Button>
      </Form.Item>

      </Form>
    </>
  );
};

export default TreeInfoForm;
