import React, { memo, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

export type IconProps = {
  width?: number;
  height?: number | string;
  svg: string;
  fill?: string;
  style?: React.CSSProperties | undefined;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ height = 24, width = 24, svg, onClick, fill, style, className }: IconProps) => {
  const fetchSvg = async () => {
    try {
      const response = await fetch(svg);
      const svgData = await response.text();
      return svgData;
    } catch (error) {
      console.error('Erro ao buscar SVG:', error);
      return null;
    }
  };

  const { data } = useQuery({ queryKey: [svg], queryFn: fetchSvg });

  const svgContent = useMemo(() => data || '', [data]);

  return (
    <svg
      className={className}
      onClick={onClick}
      data-testid={'icon'}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      dangerouslySetInnerHTML={{ __html: svgContent }} // Injeta o SVG como HTML interno
    />
  );
};

export default memo(Icon);
