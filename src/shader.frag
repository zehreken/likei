#version 450

layout(location=0) in vec3 v_color;
layout(location=0) out vec4 f_color;

void main() {
    f_color = vec4(v_color, 1.0);
}
/*#version 450

layout(location=0) out vec4 f_color;

float circle(vec2 pos, float radius)
{
    float r = length(pos) - radius;
	return r;
}

float box(vec2 pos, vec2 b)
{
    vec2 d = abs(pos) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

void main() {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 res = vec2(1600, 1200);
    vec2 uv = gl_FragCoord.xy / res.xy;
    uv -= 0.5;
    uv.x *= res.x / res.y; // remove the effect of aspect ratio
    
    float radius = 0.04;
    // float sound = pow(texture(iChannel0, vec2(0, 0)).r / 7.0, 2.0);
    // radius += sound;
    vec2 p = vec2(0.0, -0.1);
    
    float c = circle(uv + p, radius * 4.0);
    vec3 col_c = vec3(0.0) - sign(c) * vec3(1.0, 1.0, 1.0);
	col_c = mix(col_c, vec3(1.0), 1.0 - smoothstep(0.0, 0.005, abs(c)));
    
    float d = circle(uv + p, 2.5 * radius);
    vec3 col_d = vec3(0.0) - sign(d) * vec3(1.0, 1.0, 1.0);
    col_d = mix(col_d, vec3(1.0), 1.0 - smoothstep(0.0, 0.005, abs(d)));
    
    float e = circle(uv + p, radius);
    vec3 col_e = vec3(0.0) - sign(e) * vec3(1.0, 1.0, 1.0);
    col_e = mix(col_e, vec3(1.0), 1.0 - smoothstep(0.0, 0.005, abs(e)));
    
    float box1 = box(uv + vec2(0.0, 0.2), vec2(0.2, 0.03));
    vec3 col_box1 = vec3(1.0) - sign(box1) * vec3(1.0, 1.0, 1.0);
    col_box1 = mix(col_box1, vec3(1.0), 1.0 - smoothstep(0.0, 0.001, abs(box1)));
    
    float box2 = box(uv + vec2(0.0, 0.3), vec2(0.2, 0.03));
    vec3 col_box2 = vec3(1.0) - sign(box2) * vec3(1.0, 1.0, 1.0);
    col_box2 = mix(col_box2, vec3(1.0), 1.0 - smoothstep(0.0, 0.001, abs(box2)));
    
    vec3 col = col_c - col_d + col_e + col_box1 + col_box2;
    
    f_color = vec4(col, 1.0);
}*/
