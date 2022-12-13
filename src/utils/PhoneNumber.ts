let phoneIndex = 0;
const phoneSize = 30;
const phones = ['15382894231', '15045316004', '15249675366', '13805600180', '15764014037', '15387218569', '13678489626', '15985875517', '15597783335', '15369207406', '18882862222', '13456861284', '13181084426', '13476544448', '18816731641', '13148118652', '15644465710', '13898060949', '13629544889', '13975901282', '15720757192', '15542159402', '15907691372', '13060021530', '13485569184', '15517519659', '13214619450', '13237573011', '15639253109', '18984198669', '18914706308', '15749797194', '15007399663', '15216562009', '13356212634', '15983097810', '15586237091', '13681303387', '15164465434', '13055508628', '13391919475', '13520396752', '13401841905', '13231428037', '18947530821', '15229308136', '15308452387', '15300931682', '13120200049', '13624336214', '18806275972', '13101032681', '13820321487', '15766840692', '15153307710', '18857881080', '13518833836', '13362960425', '13386833097', '15325709591', '13301847870', '15104721554', '13515441824', '18941543868', '15602327143', '15225200007', '15735396512', '15128736926', '15654492584', '13332259871', '13760923606', '13656916436', '13987305029', '13116360650', '13987293509', '13921552222', '13981868408', '13254878328', '13085462596', '15082376794', '13398778479', '15540232439', '15828748491', '13665690852', '13735515633', '13078849005', '15832510981', '13494977539', '15198998597', '15021211412', '13071877311', '15264529234', '13233004763', '13124213096', '18843797063', '13006503145', '15312868761', '13782824327', '13829276049', '15294153746'];
export const getRandomInt = (max: number) =>{
    return Math.floor(Math.random() * max);
}
export const greenPhone = ()=>{
    if (phoneIndex*phoneSize > phones.length){
        phoneIndex = 0;
    }
    let value = phones.map((v,index)=>{
        if (index < phoneIndex*phoneSize+phoneSize && index > phoneIndex*phoneSize){
            return `${v.substring(0,3)}****${v.substring(7)} 成功借款 ${getRandomInt(100)}000元\r\t`;
        }
    });
    phoneIndex++;
    // console.log(value);
    return value.filter((value)=>value);
    // let str='';
    // for (let i = 0; i < value.length; i++) {
    //     str+=`${value[i]} 成功借款 ${getRandomInt(100)}000元`;
    // }
    // return str;
};