import { NextRequest, NextResponse } from "next/server";
import Dashscope from "aliyun-dashscope";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body.messages);
    const dashscope = new Dashscope();
    const prompt = body.messages[body.messages.length - 1].content;
    const result = await dashscope.generation.generation({ model: "qwen-turbo", input: { prompt } });
    console.log(result);
    return NextResponse.json({ output: result.output }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
