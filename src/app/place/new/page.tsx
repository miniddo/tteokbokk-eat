'use client';

import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Address, State } from 'react-daum-postcode/lib/loadPostcode';
import Button from '@/components/Atom/Button';
import Text from '@/components/Atom/Text';
import Alert from '@/components/Molecule/Alert';

const mockPlaceList = ['엽기떡볶이', '응급실떡볶이'];

export default function placeNew() {
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(true);

  const [alertInfo, setAlertInfo] = useState({ text: '', color: 'blue' });
  const [openAlert, setOpenAlert] = useState(false);

  const [openAddressDialog, setOpenAddressDialog] = useState(false);
  const [zoneCode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDoubleCheck = () => {
    if (!name) return;

    const isDuplication = mockPlaceList.includes(name);
    setValidName(isDuplication);

    setAlertInfo({
      text: isDuplication
        ? '이미 존재하는 이름입니다.'
        : '사용 가능한 이름입니다.',
      color: isDuplication ? 'red' : 'blue',
    });
    setOpenAlert(true);

    setTimeout(() => {
      setOpenAlert(false);
    }, 2000);
  };

  const handleCompleteAddress = (data: Address) => {
    const { address, zonecode } = data;
    setZoneCode(zonecode.toString());
    setAddress(address);
  };

  const handleCloseAddress = (state: State) => {
    if (state === 'FORCE_CLOSE' || state === 'COMPLETE_CLOSE') {
      setOpenAddressDialog(false);
    }
  };

  const handleChangeDetailAddress = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDetailAddress(e.target.value);
  };

  return (
    <main>
      {/* 가게 이름 */}
      <div className="mb-3 flex w-full flex-col gap-3 rounded-md bg-white px-4 py-3 font-notoSansKr">
        <Text weight={500}>가게 이름</Text>
        <div className="flex w-full items-center gap-2">
          <input
            type="text"
            id="place_name"
            className="block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="ex. 엽기떡볶이"
            required
            onChange={handleChangeName}
          />
          <Button size="small" onClick={handleDoubleCheck}>
            중복 확인
          </Button>
        </div>
      </div>
      {/* 주소 */}
      <div className="mb-3 flex w-full flex-col gap-3 rounded-md bg-white px-4 py-3 font-notoSansKr">
        <Text weight={500}>주소</Text>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="zone_code"
              className="block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="우편번호"
              value={zoneCode}
              readOnly
              required
            />
            <Button
              variant="secondary"
              size="small"
              onClick={() => setOpenAddressDialog(true)}
            >
              우편번호 찾기
            </Button>
          </div>
          <div>
            <input
              type="text"
              id="address"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="주소"
              value={address}
              readOnly
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="detail_address"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="상세주소"
              value={detailAddress}
              onChange={handleChangeDetailAddress}
            />
          </div>
        </div>
      </div>

      {openAlert && <Alert text={alertInfo.text} color={alertInfo.color} />}
      {openAddressDialog && (
        <div>
          <DaumPostcode
            onComplete={handleCompleteAddress}
            onClose={handleCloseAddress}
          />
        </div>
      )}
    </main>
  );
}
