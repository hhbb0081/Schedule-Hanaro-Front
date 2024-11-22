import InquiryCard from "@/components/Admin/Inquiry/InquiryCard";
import { ReactComponent as PhoneIcon } from '../../../assets/icons/phone.svg'; 
import { ReactComponent as PersonIcon } from '../../../assets/icons/Person.svg';

export function AdminMyPage() {
    const phoneStats = {
      inquiry:"전화문의",
        today: 10,
        transferred: 28,
        reserved: 88,
        total: 888,
      };
    
      const oneToOneStats = {
        inquiry:"1:1 문의",
        today: 10,
        transferred: 28,
        reserved: 88,
        total: 888
      }
    return (
      <div className='pt-10 text-6xl'>
        <InquiryCard stats={phoneStats} icon={PhoneIcon}/>
        <InquiryCard stats={oneToOneStats} icon={PersonIcon }/>
      </div>
      
    );
  }
  