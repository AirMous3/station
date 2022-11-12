export const CurveText = ({
  children,
  height,
  width,
  radius,
  id,
  offset = '50%',
}) => {
  const vbox = [0, 0, width, height].join(' ');

  function circle(cx, cy, r, deg) {
    var theta = (deg * Math.PI) / 180,
      dx = r * Math.cos(theta),
      dy = -r * Math.sin(theta);
    return (
      'M ' +
      cx +
      ' ' +
      cy +
      'm ' +
      dx +
      ',' +
      dy +
      'a ' +
      r +
      ',' +
      r +
      ' 0 1,0 ' +
      -2 * dx +
      ',' +
      -2 * dy +
      'a ' +
      r +
      ',' +
      r +
      ' 0 1,0 ' +
      2 * dx +
      ',' +
      2 * dy
    );
  }

  const d = circle(width / 2, height / 2, radius, 360);
  return (
    <svg viewBox={vbox} width={width} height={height}>
      <g>
        <path stroke="stroke" d={d} id={id} fill="none" />
        <text>
          <textPath
            xlinkHref={`#${id}`}
            fill="white"
            startOffset={offset}
            textAnchor="middle"
          >
            {children}
          </textPath>
        </text>
      </g>
    </svg>
  );
};
