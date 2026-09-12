import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { servicesData } from "../../lib/servicesData";

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return servicesData.map((s) => ({
    id: s.id,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
