use super::Vertex;

pub const VERTICES_PENTAGON: &[Vertex] = &[
    Vertex {
        position: [-0.0868241, 0.49240386, 0.0],
        color: [0.5, 0.0, 0.5],
    }, // A
    Vertex {
        position: [-0.49513406, 0.06958647, 0.0],
        color: [0.5, 0.0, 0.5],
    }, // B
    Vertex {
        position: [-0.21918549, -0.44939706, 0.0],
        color: [0.5, 0.0, 0.5],
    }, // C
    Vertex {
        position: [0.35966998, -0.3473291, 0.0],
        color: [0.5, 0.0, 0.5],
    }, // D
    Vertex {
        position: [0.44147372, 0.2347359, 0.0],
        color: [0.5, 0.0, 0.5],
    }, // E
];

pub const INDICES_PENTAGON: &[u16] = &[0, 1, 4, 1, 2, 4, 2, 3, 4];

pub const VERTICES_QUAD: &[Vertex] = &[
    Vertex {
        position: [-0.5, 0.5, 0.0],
        color: [1.0, 0.0, 0.21],
    }, // 0
    Vertex {
        position: [-0.5, -0.5, 0.0],
        color: [1.0, 0.0, 0.21],
    }, // 1
    Vertex {
        position: [0.5, 0.5, 0.0],
        color: [1.0, 0.0, 0.21],
    }, // 2
    Vertex {
        position: [0.5, -0.5, 0.0],
        color: [1.0, 0.0, 0.21],
    }, // 3
];

pub const INDICES_QUAD: &[u16] = &[0, 1, 2, 2, 1, 3];
