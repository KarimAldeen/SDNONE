import React from 'react'
import { useTranslation } from 'react-i18next'

const Moaz = () => {
  const {t} = useTranslation();
  // let What_the_language = localStorage.getItem('Lung')  ?? "en";
  // console.log(What_the_language);
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={588}
    height={608}
    viewBox="0 0 588 608"
    className='Moaz'
  >
    <defs>
      <pattern
        id="pattern"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="10 20 910 894"
      >
        <image width={1110} height={1114} xlinkHref="../Images/moaz-image.jpg" />
      </pattern>
      <filter
        id="Path_6"
        x={0}
        y={246}
        width={588}
        height={361}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={15}  />
        <feGaussianBlur stdDeviation={3} result="blur" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="Path_6-2"
        x={0}
        y={246}
        width={588}
        height={361}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-9}  />
        <feGaussianBlur stdDeviation={6} result="blur-2" />
        <feFlood floodOpacity="0.129" result="color" />
        <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
        <feComposite operator="in" in="color" />
        <feComposite operator="in" in2="SourceGraphic" />
      </filter>
      <pattern
        id="pattern-2"
        width={1}
        height={1}
        viewBox="23.443 0 26.78 33.195"
      >
        <image
          preserveAspectRatio="none"
          width="123.952"
          height={100}
          xlinkHref="../Images/moaz-image2.jpg"
        />
      </pattern>
      <pattern
        id="pattern-3"
        width={1}
        height={1}
        viewBox="4.717 34.908 107.337 92.416"
      >
        <image
          preserveAspectRatio="none"
          width={157}
          height="182.347"
          xlinkHref="../Images/moaz-image3.jpg"
        />
      </pattern>
      <pattern
        id="pattern-4"
        width={1}
        height={1}
        viewBox="80.535 0 51.853 95.178"
      >
        <image
          preserveAspectRatio="none"
          width="212.922"
          height={116}
          xlinkHref="../Images/moaz-image4.png"
        />
      </pattern>
      <pattern
        id="pattern-5"
        width={1}
        height={1}
        viewBox="18.739 33.938 66.003 43.23"
      >
        <image
          preserveAspectRatio="none"
          width={116}
          height="177.109"
          xlinkHref="../Images/moaz-image5.jpg"
        />
      </pattern>
      <pattern
        id="pattern-6"
        width={1}
        height={1}
        viewBox="1.094 22.948 63.812 41.144"
      >
        <image
          preserveAspectRatio="none"
          width={66}
          height="102.363"
          xlinkHref="../Images/moaz-image6.jpg"
        />
      </pattern>
    </defs>
    <g id="moaz" transform="translate(-20)">
      <circle
        id="Ellipse_1"
        data-name="Ellipse 1"
        cx={58}
        cy={58}
        r={58}
        transform="translate(398 191)"
        fill="url(#pattern)"
      />
      <g id="Group_1" data-name="Group 1">
        <g data-type="innerShadowGroup">
          <g transform="matrix(1, 0, 0, 1, 20, 0)" filter="url(#Path_6)">
            <path
              id="Path_6-3"
              data-name="Path 6"
              d="M54,0H516a54,54,0,0,1,54,54V283a54,54,0,0,1-54,54H54A54,54,0,0,1,0,283V54A54,54,0,0,1,54,0Z"
              transform="translate(9 246)"
              fill="#fefefe"
            />
          </g>
          <g transform="matrix(1, 0, 0, 1, 20, 0)" filter="url(#Path_6-2)">
            <path
              id="Path_6-4"
              data-name="Path 6"
              d="M54,0H516a54,54,0,0,1,54,54V283a54,54,0,0,1-54,54H54A54,54,0,0,1,0,283V54A54,54,0,0,1,54,0Z"
              transform="translate(9 246)"
              fill="#fff"
            />
          </g>
        </g>
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width={100}
          height={100}
          rx={50}
          transform="translate(61 364.5)"
          fill="url(#pattern-2)"
        />
        <path
          id="Path_1"
          data-name="Path 1"
          d="M211.549,280.927a1,1,0,0,1,1.9,0l1.631,5.019a1,1,0,0,0,.951.691h5.278a1,1,0,0,1,.587,1.809l-4.269,3.1a1,1,0,0,0-.364,1.118l1.631,5.02a1,1,0,0,1-1.539,1.118l-4.269-3.1a1,1,0,0,0-1.176,0l-4.269,3.1a1,1,0,0,1-1.539-1.118l1.631-5.02a1,1,0,0,0-.364-1.118l-4.269-3.1a1,1,0,0,1,.587-1.809h5.278a1,1,0,0,0,.951-.691Z"
          fill="#ffc002"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M240.549,280.927a1,1,0,0,1,1.9,0l1.631,5.019a1,1,0,0,0,.951.691h5.278a1,1,0,0,1,.587,1.809l-4.269,3.1a1,1,0,0,0-.364,1.118l1.631,5.02a1,1,0,0,1-1.539,1.118l-4.269-3.1a1,1,0,0,0-1.176,0l-4.269,3.1a1,1,0,0,1-1.539-1.118l1.631-5.02a1,1,0,0,0-.364-1.118l-4.269-3.1a1,1,0,0,1,.587-1.809h5.278a1,1,0,0,0,.951-.691Z"
          fill="#ffc002"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M269.549,280.927a1,1,0,0,1,1.9,0l1.631,5.019a1,1,0,0,0,.951.691h5.278a1,1,0,0,1,.587,1.809l-4.269,3.1a1,1,0,0,0-.364,1.118l1.631,5.02a1,1,0,0,1-1.539,1.118l-4.269-3.1a1,1,0,0,0-1.176,0l-4.269,3.1a1,1,0,0,1-1.539-1.118l1.631-5.02a1,1,0,0,0-.364-1.118l-4.269-3.1a1,1,0,0,1,.587-1.809h5.278a1,1,0,0,0,.951-.691Z"
          fill="#ffc002"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M298.549,280.927a1,1,0,0,1,1.9,0l1.631,5.019a1,1,0,0,0,.951.691h5.278a1,1,0,0,1,.587,1.809l-4.269,3.1a1,1,0,0,0-.364,1.118l1.631,5.02a1,1,0,0,1-1.539,1.118l-4.269-3.1a1,1,0,0,0-1.176,0l-4.269,3.1a1,1,0,0,1-1.539-1.118l1.631-5.02a1,1,0,0,0-.364-1.118l-4.269-3.1a1,1,0,0,1,.587-1.809h5.278a1,1,0,0,0,.951-.691Z"
          fill="#ffc002"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M327.549,280.927a1,1,0,0,1,1.9,0l1.631,5.019a1,1,0,0,0,.951.691h5.278a1,1,0,0,1,.587,1.809l-4.269,3.1a1,1,0,0,0-.364,1.118l1.631,5.02a1,1,0,0,1-1.539,1.118l-4.269-3.1a1,1,0,0,0-1.176,0l-4.269,3.1a1,1,0,0,1-1.539-1.118l1.631-5.02a1,1,0,0,0-.364-1.118l-4.269-3.1a1,1,0,0,1,.587-1.809h5.278a1,1,0,0,0,.951-.691Z"
          fill="#ddd"
        />
        <text
          id="The_level_of_professionalism_and_attention_to_detail_displayed_by_SDN_is_truly_commendable._Deadlines_were_not_just_met_but_exceeded_and_the_quality_of_their_work_is_nothing_short_of_stellar._It_s_evident_that_they_don_t_just_consider_themselves_a_service"
          data-name="The level of professionalism and attention to detail displayed by SDN is truly commendable. Deadlines were not just met but exceeded, and the quality of their work is nothing short of stellar. It's evident that they don't just consider themselves a service"
          transform="translate(201 312)"
          fill="#707070"
          fontSize={16}
          fontFamily="OpenSans-Regular, Open Sans"
        >
          {/* { */}
            {/* What_the_language === "ar" ? */}
            {/* <>
             <tspan x={130} y={17} className='TSN_1'>
           {t(" The level of professionalism and attention to detail")}{" "}
          </tspan>
          <tspan x={55} y={43} className='TSN_2'>
            {t("displayed by SDN is truly commendable. Deadlines")}{" "}
          </tspan>
          <tspan x={84} y={69} className='TSN_3'>
            {t("were not just met but exceeded, and the quality of")}{" "}
          </tspan>
          <tspan x={140} y={95} className='TSN_4'>
            {t("their work is nothing short of stellar. It's evident")}{" "}
          </tspan>
          <tspan x={150} y={121} className='TSN_5'>
            {t("that they don't just consider themselves a service")}{" "}
          </tspan>
          <tspan x={144} y={147} className='TSN_6'>
            {t("provider; they're genuinely invested in the success")}{" "}
          </tspan>
          <tspan x={80} y={147} className='TSN_7'>
            {t("of their clients.")}{" "}
          </tspan>
            </> */}
            {/* :  */}
            <>
             <tspan x={0} y={17} className='TSN_1'>
           {t(" The level of professionalism and attention to detail")}{" "}
          </tspan>
          <br/>
          <tspan x={0} y={43} className='TSN_2'>
            {t("displayed by SDN is truly commendable. Deadlines")}{" "}
          </tspan>
          <br/>
          <tspan x={0} y={69} className='TSN_3'>
            {t("were not just met but exceeded, and the quality of")}{" "}
          </tspan>
          <br/>
          <tspan x={0} y={95} className='TSN_4'>
            {t("their work is nothing short of stellar. It's evident")}{" "}
          </tspan>
          <br/>
          <tspan x={0} y={121} className='TSN_5'>
            {t("that they don't just consider themselves a service")}{" "}
          </tspan>
          <br/>
          <tspan x={0} y={147} className='TSN_6'>
            {t("provider; they're genuinely invested in the success")}{" "}
          </tspan>
          <br/>
          <tspan x={0} y={177} className='TSN_7'>
            {t("of their clients.")}{" "}
          </tspan>
          <br/>
            </>
          {/* // } */}
         
        </text>
        <text
          id="M.Amri"
          transform="translate(198 517)"
          fontSize={20}
          fontFamily="SitkaText-Bold, Sitka Text"
          fontWeight={700}
        >
          <tspan x={0} y={15}>
            M.Amri
          </tspan>
        </text>
      </g>
      <circle
        id="Ellipse_2"
        data-name="Ellipse 2"
        cx="78.5"
        cy="78.5"
        r="78.5"
        transform="translate(212)"
        fill="url(#pattern-3)"
      />
      <circle
        id="Ellipse_3"
        data-name="Ellipse 3"
        cx={58}
        cy={58}
        r={58}
        transform="translate(33 121)"
        fill="url(#pattern-4)"
      />
      <g id="Group_2" data-name="Group 2" opacity="0.8">
        <circle
          id="Ellipse_4"
          data-name="Ellipse 4"
          cx={58}
          cy={58}
          r={58}
          transform="translate(284 492)"
          fill="url(#pattern-5)"
        />
      </g>
      <circle
        id="Ellipse_5"
        data-name="Ellipse 5"
        cx={33}
        cy={33}
        r={33}
        transform="translate(179 169)"
        fill="url(#pattern-6)"
      />
    </g>
  </svg>
  

    
    )
}

export default Moaz