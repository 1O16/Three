export const vertexShader = `
    varying vec3 Normal;
    void main() {
        Normal = normalize(normalMatrix * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vec4 mvPosition = viewMatrix * worldPosition;
        gl_Position = projectionMatrix * mvPosition;
    }
`;

export const fragmentShader = `
    varying vec3 Normal;
    void main() {
        vec3 n = normalize(Normal);
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

/*
Vertex Shader는 3D 모델의 정점(vertex)에 대한 정보를 받아들이고, 각 정점의 위치, 색상, 노말 벡터 등을 계산합니다. 이를 통해 3D 모델의 모양을 결정할 수 있습니다. Vertex Shader는 GPU에서 실행되며, 입력 데이터(정점의 위치 등)를 처리하여 새로운 데이터를 출력합니다.
Fragment Shader는 Vertex Shader에서 출력한 데이터를 받아들이고, 각 픽셀(pixel)의 색상을 계산합니다. 이를 통해 3D 모델의 표면에 텍스처를 적용하거나, 광원 처리를 수행하여 그림자나 반사 효과 등을 생성할 수 있습니다. Fragment Shader는 GPU에서 실행되며, 출력 데이터(픽셀의 색상 등)을 처리하여 최종 그림을 출력합니다.

 Normal은 3D 그래픽의 빛과 그림자, 물체의 재질(material) 등을 다루는 데 중요한 개념이며, WebGL에서는 이를 적절히 계산하여 자연스러운 3D 그래픽을 만드는 데 사용됩니다.
 Normal 벡터는 주로 vertex shader에서 계산됩니다. vertex shader는 정점의 위치뿐만 아니라, Normal 벡터, 색상, 텍스처 좌표 등의 추가적인 데이터를 생성합니다. fragment shader에서는 vertex shader에서 계산된 Normal 값을 이용하여 조명과 물체의 상호작용을 계산합니다.

1. normalMatrix:
normalMatrix는 모델 뷰 행렬(modelView matrix)의 역전치(transpose) 행렬입니다. normalMatrix는 법선 벡터(normal vector)를 변환하는 데 사용됩니다. 법선 벡터는 광원과 표면 사이의 각도를 계산하는 데 사용되며, 모델 뷰 행렬의 변환으로 인해 변형됩니다. normalMatrix는 이 변형을 보정하여 올바른 각도를 계산할 수 있도록 합니다.

2. normalize:
normalize는 벡터를 정규화(normalize)하는 함수입니다. 정규화란 벡터의 크기를 1로 만드는 것을 말합니다. normalize를 사용하면 법선 벡터와 같이 길이가 중요한 벡터를 계산하는 데 도움이 됩니다.

3. worldPosition:
worldPosition은 모델의 월드 좌표계에서의 위치를 나타내는 벡터입니다. 이 벡터는 모델의 위치를 계산하는 데 사용됩니다. 모델의 위치는 모델 뷰 행렬에서 변환된 위치입니다.

4. modelMatrix:
modelMatrix는 모델의 변환을 나타내는 행렬입니다. 이 행렬은 모델의 크기, 위치, 회전 등의 변환을 수행합니다. 모델 뷰 행렬에서는 modelMatrix가 모델의 변환을 나타내며, 뷰 행렬(view matrix)은 카메라의 위치와 방향을 나타냅니다.

5. mvPosition:
mvPosition은 모델 뷰 행렬로 변환된 정점(vertex)의 위치를 나타내는 벡터입니다. 이 벡터는 카메라와 모델 사이의 거리를 계산하는 데 사용됩니다.

6. viewMatrix:
viewMatrix는 카메라의 위치와 방향을 나타내는 행렬입니다. 이 행렬은 카메라의 위치와 방향에 따라 모든 물체를 변환합니다.

7. projectionMatrix:
projectionMatrix는 투영을 수행하는 행렬입니다. 이 행렬은 원근 투영(perspective projection) 또는 직교 투영(orthographic projection)을 수행합니다. 투영 행렬은 3D 그래픽의 깊이(depth)를 계산하는 데 사용됩니다.
*/
