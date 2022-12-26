-- CreateIndex
CREATE INDEX "deliveries_id_client_id_deliveryman_idx" ON "deliveries"("id_client", "id_deliveryman");
