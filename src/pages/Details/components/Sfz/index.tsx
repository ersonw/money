import './index.less';
import {Form, Input, List, NoticeBar, ImageUploader, ImageUploadItem, Toast, Dialog} from "antd-mobile";
import React, {useState} from "react";
// @ts-ignore
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import {CameraOutline} from 'antd-mobile-icons';
import resolve from "resolve";

const Sfz = () => {
    const [name, setName] = useState("");
    const [sfz, setSfz] = useState("");
    const [front, setFront] = useState<ImageUploadItem[]>([]);
    const [hand, setHand] = useState<ImageUploadItem[]>([]);
    const [reverse, setReverse] = useState<ImageUploadItem[]>([]);
    const uploadFile = async (file: File) => {
        return new Promise<ImageUploadItem>((resolve)=>{
            setTimeout(()=>{
                resolve({
                    url: URL.createObjectURL(file),
                });
            },1000*3);
        });
    };
    const submit = async (file: File) => {
        return new Promise<ImageUploadItem>((resolve)=>{
            setTimeout(()=>{
                resolve({
                    url: URL.createObjectURL(file),
                });
            },1000*3);
        });
    };
    const beforeUpload = (file: File) => {
        if (file.size > 1024 * 1024) {
            Toast.show('请选择小于 1M 的图片')
            return null
        }
        return file
    }
    return (
        <List className='sfz-body'>
            <NoticeBar
                content='请先用相机拍照保存到相册后再上传照片. '
                style={{
                    color: 'red',
                    backgroundColor: 'rgba(227, 227, 227, 0.71)',
                    borderColor: 'rgba(227, 227, 227, 0.71)',
                }}
                icon={<AntDesign name="infocirlceo" color='currentColor' size={15}/>}
            />
            <Form layout='horizontal'>
                <Form.Item label='真实姓名' name='name'>
                    <Input placeholder='请输入真实姓名' clearable value={name} onChange={setName}/>
                </Form.Item>
                <Form.Item label='身份证号' name='sfz'>
                    <Input placeholder='请输入身份证号' clearable value={sfz} onChange={setSfz}/>
                </Form.Item>
                <Form.Item label='身份证正面' name='front'>
                    <ImageUploader
                        upload={(file) => {
                            console.log(file);
                            return uploadFile(file);
                        }}
                        value={front}
                        onChange={setFront}
                        beforeUpload={beforeUpload}
                        maxCount={1}
                        onCountExceed={exceed => {
                            Toast.show(`最多选择 ${1} 张图片，你多选了 ${exceed} 张`)
                        }}
                        onDelete={() => {
                            return Dialog.confirm({
                                content: '是否确认删除',
                            })
                        }}
                    >
                        <div
                            className='image-picker'
                        >
                            <CameraOutline />
                        </div>
                    </ImageUploader>
                </Form.Item>
                <Form.Item label='身份证反面' name='reverse'>
                    <ImageUploader
                        upload={(file) => {
                            console.log(file);
                            return uploadFile(file);
                        }}
                        value={reverse}
                        onChange={setReverse}
                        beforeUpload={beforeUpload}
                        maxCount={1}
                        onCountExceed={exceed => {
                            Toast.show(`最多选择 ${1} 张图片，你多选了 ${exceed} 张`)
                        }}
                        onDelete={() => {
                            return Dialog.confirm({
                                content: '是否确认删除',
                            })
                        }}
                    >
                        <div
                            className='image-picker'
                        >
                            <CameraOutline />
                        </div>
                    </ImageUploader>
                </Form.Item>
                <Form.Item label='手持身份证' name='hand'>
                    <ImageUploader
                        upload={(file) => {
                            console.log(file);
                            return uploadFile(file);
                        }}
                        value={hand}
                        onChange={setHand}
                        beforeUpload={beforeUpload}
                        maxCount={1}
                        onCountExceed={exceed => {
                            Toast.show(`最多选择 ${1} 张图片，你多选了 ${exceed} 张`)
                        }}
                        onDelete={() => {
                            return Dialog.confirm({
                                content: '是否确认删除',
                            })
                        }}
                    >
                        <div
                            className='image-picker'
                        >
                            <CameraOutline />
                        </div>
                    </ImageUploader>
                </Form.Item>
            </Form>
            <div className='bnt-save'>
                <div
                    className='bnt'
                    onClick={()=>{}}
                >
                    提交
                </div>
            </div>
        </List>
    );
};
export default Sfz;