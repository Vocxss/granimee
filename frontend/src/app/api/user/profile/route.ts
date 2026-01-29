import { supabaseServer } from "@/lib/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const name = formData.get("username") as string;
    const image = formData.get("image");

    let imageUrl = user.user_metadata.picture;

    if (image && image instanceof File) {
      // Upload new image
      const fileExt = image.name.split(".").pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(fileName, image, {
          contentType: image.type,
          upsert: true,
        });

      if (uploadError)
        return NextResponse.json(
          { error: uploadError.message },
          { status: 400 },
        );

      const { data: publicUrlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;
    }

    const { error } = await supabase
      .from("user")
      .update({
        username: name,
        picture: imageUrl,
      })
      .eq("id", user.id);

    if (error)
      return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json(
      { message: "Updated successfully", data: { name, picture: imageUrl } },
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update :(", error: error.message },
      { status: 500 },
    );
  }
}
