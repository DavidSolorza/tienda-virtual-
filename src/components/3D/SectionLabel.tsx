import { Text } from '@react-three/drei';

interface SectionLabelProps {
  text: string;
  position: [number, number, number];
}

export function SectionLabel({ text, position }: SectionLabelProps) {
  return (
    <Text
      position={position}
      fontSize={0.5}
      color="#374151"
      anchorX="center"
      anchorY="middle"
      font="/fonts/inter-bold.woff"
      maxWidth={4}
      textAlign="center"
    >
      {text}
    </Text>
  );
}