type Props = { /*type Props = { label: string; ... }	이 컴포넌트가 받을 값의 목록. string은 글자라는 뜻*/
  label: string;
  position: string;
  size?: number; /*물음표 = "안 줘도 됨"*/
}; 

export default function IconButton({ label, position, size = 32 }: Props) {
  return (
    <button
      type="button"
      aria-label={label}
      className="cursor-pointer bg-[url('/sp_main.png')] bg-[length:471px_455px] bg-no-repeat"
      style={{ width: size, height: size, backgroundPosition: position }}
    />
  );
}