import React from 'react';
import { HeaderMemo } from '../../../components/Header/Header';
import './style.scss';


const Terms = (props) => {
  const category = " Terms of Use";

  return (
    <>
      <HeaderMemo category={category} />
      <div className='container-terms'>
        <h1>Terms of Use</h1>
        <div className='text'>
          <b>INTRODUCTION</b>
          <br /><br />
        Use of material presented on this site is subject to the following terms and conditions.
        You agree to these terms and conditions by accessing this web site.
        <br /><br />
          <b> YOU MUST BE AT LEAST 21 YEARS OLD TO USE THIS SITE OR PURCHASE ALCOHOLIC BEVERAGES.</b>

          <br /><br />
        RemedyLiquor.com, and related services, is intended only for the use of persons who are at least 21 years of age.
         Persons under 21 years old are prohibited from using RemedyLiquor.com or related services in any way.
        <br /><br />
          <b>SALE of ALCOHOLIC BEVERAGES</b>

          <br /><br />
        RemedyLiquor.com does not sell alcohol to persons under the age of 21. By using this site you affirm that
         you are at least 21 years old. RemedyLiquor.com makes every effort to ensure that alcoholic beverages are not delivered
          to anyone who is under the age of 21. By using this site you are acknowledging that the person receiving a shipment of alcoholic
           beverages from RemedyLiquor.com is over the age of 21. You also agree that any alcohol purchased from RemedyLiquor.com is
            intended for personal consumption and not for resale. If you do not agree with these conditions of use please do not use this site.
        <br /><br />
          <b> NO WARRANTIES AND LIMITATION OF LIABILITY</b>

          <br /><br />
        Information provided on this web site is provided "as is" without warranty of any kind, either express or implied,
        including and without limitation warranties of merchantability, fitness for a particular purpose, or noninfringement.
         Although we keep our pages up to date, RemedyLiquor.com cannot guarantee the accuracy, completeness or timeliness of
         the information on this web site and the information, content and documents on this web site may be revised, changed,
         improved, or updated at any time without notice.
        <br /><br />
        RemedyLiquor.com assumes no liability or responsibility for any errors or omissions in the content of
        this web site. Your use of this web site is at your own risk. You agree that RemedyLiquor.com is not responsible
        for any errors or omissions or for any damages for the use of the web site under any circumstances. Under no circumstances
        and under no legal theory shall RemedyLiquor.com, its affiliates, suppliers, or any other party involved in creating, producing,
        or delivering this web sites contents be liable to you or any other person for any direct, indirect, special, incidental,
        or consequential damages of any character (including, but not limited to, computer system viruses or bugs,
        hardware or software malfunctions, and network connection errors) arising from your access to, or use of, this web site.
        <br /><br />
          <b>  LINKS TO OTHER SITES</b>

          <br /><br />
        This web site may contain links to other or third-party web sites that are not maintained by RemedyLiquor.com.
        The linked sites are not under the control of RemedyLiquor.com and RemedyLiquor.com are not responsible for the contents of
        any linked site or any link contained in a linked site. RemedyLiquor.com provides these links to you only as a convenience and
        the inclusion of any link does not imply recommendation, approval or endorsement by RemedyLiquor.com of the site. All such links
         provided on this web site are intended solely for the convenience of users of this site and do not represent any endorsement,
          advertisement or sponsorship of linked sites or any products or services offered through such sites.
        <br /><br />
          <b> CONTENT AND TRADEMARKS</b>
          <br /><br />
        Some pictures and logo contained in this web site are a registered trademark of its respected owner.
        RemedyLiquor.com does not claim any ownership of these registered trademarks, content and logos.
      </div>
      </div>
    </>

  );
};
export default Terms;
