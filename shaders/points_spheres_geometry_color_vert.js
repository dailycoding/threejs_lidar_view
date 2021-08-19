in vec3  vtx_position;
in vec3  vtx_color;

uniform vec4 default_color;
uniform bool per_vertex_color;

uniform mat4 MANIP = mat4(1.0);

out vec4 sphere_color_in;

void main()
{
  vec4 new_position = MANIP * vec4(vtx_position, 1.0);

  gl_Position = new_position;

  if (per_vertex_color)
    sphere_color_in = vec4(vtx_color, 1.0);
  else
    sphere_color_in = default_color;
}
