export type BranchInfo = {
  address: string;
  id: string;
  tel: string;
  name: string;
  driving_directions: string;
  position_x: string;
  position_y: string;
  business_hours: string;
  type: 'atm' | 'bank' | 'reservedBank';
};

export type BranchStateInfo = {
  id: string;
  waiting_number: string;
  waiting_time: string;
  name: string;
};
